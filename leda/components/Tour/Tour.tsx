import * as React from 'react';
import { debounce } from 'lodash';
import ReactDOM from 'react-dom';
import { createOverlaySvgPath, getModalPosition } from './helpers';
import { Div } from '../Div';
import { TourProps, TourStepItem } from './types';

export const Tour = (props: TourProps): React.ReactElement | null => {
  const {
    data, activeStepKey, onChange,
  } = props;

  const activeItem = data.find((item) => item.stepKey === activeStepKey);

  const borderRadius = activeItem?.borderRadius ?? 15;

  const [path, setPath] = React.useState<string>(createOverlaySvgPath(activeItem?.element ?? null, borderRadius));
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

  React.useEffect((): (() => void) | void => {
    if (!activeItem?.element) {
      return undefined;
    }

    const handler = debounce(() => {
      setPath(createOverlaySvgPath(activeItem.element, borderRadius));
    }, 100);

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  React.useEffect((): () => void => {
    if (activeItem?.element) {
      const top = activeItem.element.offsetTop - (activeItem.offsetTop ?? 200);
      window.scrollTo({ top, left: 0, behavior: 'smooth' });
      setIsScrolling(true);

      document.body.style.overflow = 'hidden';

      setPath(createOverlaySvgPath(null, borderRadius));

      window.onscroll = () => {
        // Scroll reach the target
        if (window.pageYOffset === top) {
          setPath(createOverlaySvgPath(activeItem?.element, borderRadius));
          setIsScrolling(false);
          window.onscroll = null; // remove listener
        }
      };
    } else {
      setPath(createOverlaySvgPath(null, borderRadius));
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  const contentProps = React.useMemo(() => {
    const change = (item?: TourStepItem) => {
      onChange({
        component: {
          value: item?.stepKey ?? null,
          item: item ?? null,
        },
      });
    };

    return {
      goTo: (stepKey: string | number) => change(data.find((item) => item.stepKey === stepKey)),
      next: () => {
        const currentIndex = data.findIndex((item) => item.stepKey === activeItem?.stepKey);

        if (currentIndex === data.length - 1) {
          change(data[0]);
          return;
        }

        change(data[currentIndex + 1]);
      },
      prev: () => {
        const currentIndex = data.findIndex((item) => item.stepKey === activeItem?.stepKey);

        if (currentIndex === 0) {
          change(data[data.length - 1]);
          return;
        }

        change(data[currentIndex - 1]);
      },
      stopTour: () => change(),
    };
  }, [data, activeItem, onChange]);

  if (!activeItem || !activeItem.element) {
    return null;
  }

  const style = getModalPosition(activeItem.position, activeItem.element, isScrolling);

  const content = (
    <>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="tour-overlay">
        <path
          fill="rgba(33, 33, 33, 0.7)"
          d={path}
        />
      </svg>
      <Div className={`tour-modal ${activeItem.position}`} style={style}>
        {activeItem.content(contentProps)}
      </Div>
    </>
  );

  return ReactDOM.createPortal(content, document.body);
};

Tour.displayName = 'Tour';
