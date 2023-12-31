'use client';

import * as React from 'react';
import { debounce } from 'lodash';
import ReactDOM from 'react-dom';
import { createOverlaySvgPath, getModalPositionStyles } from './helpers';
import { Div } from '../Div';
import type { TourProps, TourStepItem } from './types';

export const Tour = (props: TourProps): React.ReactElement | null => {
  const {
    data, activeStepKey, onChange,
  } = props;

  const activeItem = data.find((item) => item.stepKey === activeStepKey);

  const borderRadius = activeItem?.borderRadius ?? 15;

  const [svgPath, setSvgPath] = React.useState<string>(createOverlaySvgPath(activeItem?.element ?? null, borderRadius));
  const [isScrolling, setIsScrolling] = React.useState<boolean>(false);

  React.useEffect((): (() => void) | void => {
    if (!activeItem?.element) {
      return undefined;
    }

    const resizeHandler = debounce(() => {
      setSvgPath(createOverlaySvgPath(activeItem.element, borderRadius));
    }, 100);

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  React.useEffect((): () => void => {
    const prevOverflow = document.body.style.overflow;

    if (activeItem?.element) {
      const scrollOffsetTop = activeItem.offsetTop ?? 200;
      const viewportOffsetTop = Math.ceil(activeItem.element.getBoundingClientRect().top);
      const documentOffsetTop = viewportOffsetTop + window.scrollY;
      const shiftedDocumentOffsetTop = documentOffsetTop > scrollOffsetTop ? documentOffsetTop - scrollOffsetTop : documentOffsetTop; // position of the element with offset
      const bodyScrollHeight = document.body.scrollHeight;
      const availableScrollLength = bodyScrollHeight - (window.scrollY + window.innerHeight);
      const neededToScrollAmount = shiftedDocumentOffsetTop - window.scrollY;

      document.body.style.overflow = 'hidden';

      if (
        bodyScrollHeight <= window.innerHeight // body height is less than screen height, no scrolling
        || window.scrollY === shiftedDocumentOffsetTop // the page is already scrolled to the element
        || neededToScrollAmount >= availableScrollLength // the page is scrolled to the end and cannot be scrolled any further
      ) { // no need to scroll - display the tour at once
        setSvgPath(createOverlaySvgPath(activeItem?.element, borderRadius));
      } else { // otherwise display the tour after scrolling
        setIsScrolling(true);
        setSvgPath(createOverlaySvgPath(null, borderRadius));

        const scrollHandler = debounce(() => {
          // scrolling is over
          setSvgPath(createOverlaySvgPath(activeItem?.element, borderRadius));
          setIsScrolling(false);

          window.removeEventListener('scroll', scrollHandler); // remove listener
        }, 100);

        window.addEventListener('scroll', scrollHandler);

        window.scrollTo({ top: shiftedDocumentOffsetTop, left: 0, behavior: 'smooth' });
      }
    } else {
      setSvgPath(createOverlaySvgPath(null, borderRadius));
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

  const contentProps = React.useMemo(() => {
    const triggerOnChange = (item?: TourStepItem) => {
      onChange({
        component: {
          value: item?.stepKey ?? null,
          item: item ?? null,
        },
      });
    };

    return {
      goTo: (stepKey: string | number) => triggerOnChange(data.find((item) => item.stepKey === stepKey)),
      next: () => {
        const currentIndex = data.findIndex((item) => item.stepKey === activeItem?.stepKey);

        if (currentIndex === data.length - 1) {
          triggerOnChange();
          return;
        }

        triggerOnChange(data[currentIndex + 1]);
      },
      prev: () => {
        const currentIndex = data.findIndex((item) => item.stepKey === activeItem?.stepKey);

        if (currentIndex === 0) {
          triggerOnChange();
          return;
        }

        triggerOnChange(data[currentIndex - 1]);
      },
      stopTour: () => triggerOnChange(),
    };
  }, [data, activeItem, onChange]);

  if (!activeItem || !activeItem.element) {
    return null;
  }

  const style = getModalPositionStyles(activeItem.position, activeItem.element, isScrolling);

  const content = (
    <>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="tour-overlay">
        <path
          fill={activeItem.overlayBackgroundColor ?? 'rgba(33, 33, 33, 0.7)'}
          d={svgPath}
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
