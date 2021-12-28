import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { LabelState } from './Label.types';
import type { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: (theme: Theme) => ({
    fontFamily: theme.fonts.fontFamily.base,
  }),

  disabled: (theme: Theme) => ({
    color: theme.palette.inheritDisabled,
  }),

  enabled: (theme: Theme) => ({
    color: 'black',
  }),

  small: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[200],
    lineHeight: theme.fonts.fontLineHeight[200],
  }),

  medium: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[300],
    lineHeight: theme.fonts.fontLineHeight[300],
  }),

  large: (theme: Theme) => ({
    fontSize: theme.fonts.fontSize[400],
    lineHeight: theme.fonts.fontLineHeight[400],
    fontWeight: theme.fonts.fontWeight.medium,
  }),

  strong: (theme: Theme) => ({
    fontWeight: theme.fonts.fontWeight.bold,
  }),
});

const useRequiredIndicatorStyles = makeStyles({
  required: theme => ({
    color: 'red',
    paddingLeft: '4px',
  }),
});

export const useLabelStyles = (state: LabelState) => {
  const rootStyles = useRootStyles();
  const requiredIndicatorStyles = useRequiredIndicatorStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    rootStyles[state.size as 'small' | 'medium' | 'large'],
    state.strong && rootStyles.strong,
    state.root.className,
  );

  state.required &&
    (state.requiredIndicator.className = mergeClasses(
      requiredIndicatorStyles.required,
      state.requiredIndicator.className,
    ));

  return state;
};
