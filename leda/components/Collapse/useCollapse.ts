import * as React from 'react';

const getHeight = (content: React.MutableRefObject<HTMLElement | undefined>) => {
  if (content?.current?.scrollHeight) {
    return `${content.current.scrollHeight}px`;
  }

  return '0px';
};

export interface UseCollapseProps {
  isOpen: boolean,
  content: React.MutableRefObject<HTMLElement | undefined>,
}

export const useCollapse = ({ isOpen, content }: UseCollapseProps) => {
  const [height, setHeight] = React.useState('0');
  const [overflow, setOverflow] = React.useState('hidden');
  const [visibility, setVisibility] = React.useState('hidden');
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  const setIsExpandedStyle = React.useCallback(() => {
    setHeight('auto');
    setOverflow('visible');
    setVisibility('visible');
  }, []);

  const setIsCollapsedStyle = React.useCallback(() => {
    setVisibility('hidden');
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setVisibility('visible');
      if (isFirstRender) {
        setHeight('auto');
      } else {
        setHeight(getHeight(content));
      }
    } else if (!isFirstRender) {
      setHeight(getHeight(content));
      // The magic: Set collapsed style after setting height to enable smooth transition based on height
      window.requestAnimationFrame(() => {
        // Setting these properties will start transition from measured height to 0
        setTimeout(() => {
          // Setting these properties will start transition from measured height to 0
          setHeight('0');
          setOverflow('hidden');
        });
      });
    }
  }, [content, isFirstRender, isOpen]);

  React.useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const style = React.useMemo(() => ({
    overflow,
    visibility,
    height,
  }), [height, overflow, visibility]);

  return {
    setIsExpandedStyle,
    setIsCollapsedStyle,
    style,
  };
};
