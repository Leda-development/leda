import * as React from 'react';

const getHeight = (content: React.MutableRefObject<HTMLElement | undefined>) => {
  if (content?.current?.scrollHeight) {
    return `${content.current.scrollHeight}px`;
  }

  return '0px';
};

export interface UseCollapseProps {
  content: React.MutableRefObject<HTMLElement | undefined>,
  isOpen: boolean,
}

export const useCollapse = ({
  content, isOpen,
}: UseCollapseProps) => {
  const [isFirstRender, setIsFirstRender] = React.useState(true);
  const [height, setHeight] = React.useState('0');
  const [overflow, setOverflow] = React.useState('hidden');
  const [visibility, setVisibility] = React.useState('hidden');

  const setIsExpandedStyle = React.useCallback(() => {
    setVisibility('visible');
  }, []);

  const setIsCollapsedStyle = React.useCallback(() => {
    setVisibility('hidden');
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setHeight(isFirstRender ? 'auto' : getHeight(content));
      setVisibility('visible');
    } else if (!isFirstRender) {
      setHeight('0');
      setOverflow('hidden');
    }

    setIsFirstRender(false);
  }, [content, isFirstRender, isOpen]);

  const style = React.useMemo(() => ({
    height,
    overflow,
    visibility,
  }), [height, overflow, visibility]);

  return {
    setIsCollapsedStyle,
    setIsExpandedStyle,
    style,
  };
};
