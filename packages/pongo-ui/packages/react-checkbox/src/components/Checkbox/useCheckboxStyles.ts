import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import type { CheckboxState } from './Checkbox.types';
import { Theme } from '@pongoai/react-theme';

const indicatorClassName = 'pongoai-Checkbox-indicator';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    width: '34px',
    height: '34px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
  },

  brandChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.brand,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.brandHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.brandPressed,
    },
  }),

  inheritChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.inherit,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.inheritHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.inheritPressed,
    },
  }),

  secondaryChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.secondary,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.secondaryHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.secondaryPressed,
    },
  }),

  successChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.success,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.successHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.successPressed,
    },
  }),

  warningChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.warning,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.warningHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.warningPressed,
    },
  }),

  errorChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.error,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.errorHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.errorPressed,
    },
  }),

  infoChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.info,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.infoHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.infoPressed,
    },
  }),

  socialChecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      background: theme.palette.social,
    },
    ':hover .pongoai-Checkbox-indicator': {
      background: theme.palette.socialHover,
    },
    ':active .pongoai-Checkbox-indicator': {
      background: theme.palette.socialPressed,
    },
  }),

  brandUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.brand}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.brandHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.brandPressed,
    },
  }),

  inheritUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.inherit}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.inheritHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.inheritPressed,
    },
  }),

  secondaryUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.secondary}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.secondaryHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.secondaryPressed,
    },
  }),

  successUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.success}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.successHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.successPressed,
    },
  }),

  warningUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.warning}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.warningHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.warningPressed,
    },
  }),

  errorUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.error}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.errorHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.errorPressed,
    },
  }),

  infoUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.info}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.infoHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.infoPressed,
    },
  }),

  socialUnchecked: (theme: Theme) => ({
    '& .pongoai-Checkbox-indicator': {
      border: `2px solid ${theme.palette.social}`,
    },
    ':hover .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.socialHover,
    },

    ':active .pongoai-Checkbox-indicator': {
      borderColor: theme.palette.socialPressed,
    },
  }),

  focusIndicator: createFocusIndicatorStyleRule(
    theme => ({
      ':after': {
        content: "''",
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        boxSizing: 'border-box',
        border: `2px solid black`,
        borderRadius: '4px',
      },
    }),
    { selector: 'focus-within' },
  ),
});

const useIndicatorStyles = makeStyles({
  indicator: {
    position: 'absolute',
    boxSizing: 'border-box',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transition: 'background 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },

  small: {
    width: '16px',
    height: '16px',
  },

  medium: {
    width: '20px',
    height: '20px',
  },

  large: {
    width: '24px',
    height: '24px',
  },

  brandDisabledChecked: (theme: Theme) => ({
    background: theme.palette.brandDisabled,
  }),

  inheritDisabledChecked: (theme: Theme) => ({
    background: theme.palette.inheritDisabled,
  }),

  secondaryDisabledChecked: (theme: Theme) => ({
    background: theme.palette.secondaryDisabled,
  }),

  successDisabledChecked: (theme: Theme) => ({
    background: theme.palette.successDisabled,
  }),

  errorDisabledChecked: (theme: Theme) => ({
    background: theme.palette.errorDisabled,
  }),

  warningDisabledChecked: (theme: Theme) => ({
    background: theme.palette.warningDisabled,
  }),

  infoDisabledChecked: (theme: Theme) => ({
    background: theme.palette.infoDisabled,
  }),

  socialDisabledChecked: (theme: Theme) => ({
    background: theme.palette.socialDisabled,
  }),

  brandDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.brandDisabled}`,
  }),

  inheritDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.inheritDisabled}`,
  }),

  secondaryDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.secondaryDisabled}`,
  }),

  successDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.successDisabled}`,
  }),

  errorDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.errorDisabled}`,
  }),

  warningDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.warningDisabled}`,
  }),

  infoDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.infoDisabled}`,
  }),

  socialDisabledUnchecked: (theme: Theme) => ({
    border: `2px solid ${theme.palette.socialDisabled}`,
  }),
});

const useInputStyles = makeStyles({
  input: {
    opacity: 0,
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

export const useCheckboxStyles = (state: CheckboxState) => {
  const rootStyles = useRootStyles();
  const indicatorStyle = useIndicatorStyles();
  const inputStyles = useInputStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    !state.disabled &&
      (state.input.checked
        ? rootStyles[(state.color! + 'Checked') as 'inheritChecked']
        : rootStyles[(state.color! + 'Unchecked') as 'inheritUnchecked']),
    !state.disabled && rootStyles.focusIndicator,
    state.root.className,
  );

  state.indicator.className = mergeClasses(
    indicatorClassName,
    indicatorStyle.indicator,
    state.disabled &&
      (state.input.checked
        ? indicatorStyle[(state.color + 'DisabledChecked') as 'inheritDisabledChecked']
        : indicatorStyle[(state.color + 'DisabledUnchecked') as 'inheritDisabledUnchecked']),
    indicatorStyle[state.size!],
    state.indicator.className,
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    state.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className,
  );

  return state;
};
