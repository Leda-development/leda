import { globalDefaultTheme } from './globalDefaultTheme';
import { GlobalDefaultRenders, globalDefaultRenders } from './globalDefaultRenders';
import { UnderscoreClasses } from './underscoreClasses';
import { PartialGlobalDefaultTheme } from '../../utils/useTheme';

export interface DefaultContext {
  theme: PartialGlobalDefaultTheme,
  renders: GlobalDefaultRenders,
  underscoreClassesTransform: UnderscoreClasses,
}

export const defaultContext: DefaultContext = {
  theme: globalDefaultTheme,
  renders: globalDefaultRenders,
  underscoreClassesTransform: UnderscoreClasses.NoTransform,
};

export const setDefaultUnderscoreClassesTransform = (underscoreClassesTransform: UnderscoreClasses) => {
  defaultContext.underscoreClassesTransform = underscoreClassesTransform;
};
