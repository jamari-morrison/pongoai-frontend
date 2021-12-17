import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from '@fluentui/react-tabster';
import {
  activeStarClassName,
  inactiveStarClassName,
  disabledActiveStarClassName,
  disabledInactiveStarClassName,
} from './useRatingState';
import type { RatingState } from './Rating.types';
import { Theme } from '@pongoai/react-theme';

const useRootStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-flex',
    userSelect: 'none',
    touchAction: 'none',
    verticalAlign: 'bottom',
    height: 'var(--rating-star-size)',
    flexDirection: 'column',
  },

  small: {
    width: '120px',
    '--rating-star-size': '20px',
  },

  medium: {
    width: '144px',
    '--rating-star-size': '24px',
  },

  large: {
    width: '180px',
    '--rating-star-size': '30px',
  },

  focusIndicator: createFocusIndicatorStyleRule(
    {
      ':after': {
        content: "''",
        position: 'absolute',
        top: '-8px',
        right: '-8px',
        bottom: '-8px',
        left: '-8px',
        boxSizing: 'border-box',
        border: `2px solid black`,
        borderRadius: '4px',
      },
    },
    { selector: 'focus-within' },
  ),

  enabled: {
    cursor: 'pointer',
  },

  disabled: {
    cursor: 'not-allowed',
  },
});

const useStarStyles = makeStyles({
  star: (theme: Theme) => ({
    display: 'grid',
    outline: 'none',
    whiteSpace: 'nowrap',
    marginLeft: 'calc(var(--rating-star-size) / 2)',
    marginRight: 'calc(var(--rating-star-size) / 2)',
    '&:hover': {
      [`& .${activeStarClassName}`]: {
        '> svg': {
          fill: theme.palette.inheritHover,
        },
      },
    },

    '&:active': {
      [`& .${activeStarClassName}`]: {
        '> svg': {
          fill: theme.palette.inheritPressed,
        },
      },
    },

    [`& .${activeStarClassName}`]: {
      '> svg': {
        fill: theme.palette.inherit,
      },
    },

    [`& .${inactiveStarClassName}`]: {
      '> svg': {
        fill: '#dbdbdb',
      },
    },

    [`& .${disabledActiveStarClassName}`]: {
      '> svg': {
        fill: theme.palette.inheritDisabled,
      },
    },

    [`& .${disabledInactiveStarClassName}`]: {
      '> svg': {
        fill: '#f1f1f1',
      },
    },

    '> span': {
      display: 'flex',
      flexDirection: 'column',
      transform: 'translateX(-50%)',
      alignItems: 'center',

      '> svg': {
        width: 'var(--rating-star-size)',
        height: 'var(--rating-star-size)',
        strokeWidth: '3',
      },
    },
  }),
  enabledStar: {
    '> span': {
      '&:hover': {
        '> svg': {
          transform: 'scale(1.2, 1.2)',
        },
      },
      '&:active': {
        '> svg': {
          transform: 'scale(1, 1)',
        },
      },
      '> svg': {
        transition: 'transform .1s cubic-bezier(0.33, 0.0, 0.67, 1) filter .1s cubic-bezier(0.33, 0.0, 0.67, 1)',
      },
    },
  },
});

/**
 * Styles for the hidden input slot
 */
const useInputStyle = makeStyles({
  input: {
    opacity: 0,
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
});

export const useRatingStyles = (state: RatingState) => {
  const rootStyles = useRootStyles();
  const starWrapperStyles = useStarStyles();
  const inputStyles = useInputStyle();

  state.root.className = mergeClasses(
    rootStyles.root,
    rootStyles[state.size!],
    !state.disabled && rootStyles.focusIndicator,
    !state.readOnly && (state.disabled ? rootStyles.disabled : rootStyles.enabled),
    state.root.className,
  );

  state.starWrapper.className = mergeClasses(
    starWrapperStyles.star,
    !state.readOnly && !state.disabled && starWrapperStyles.enabledStar,
    state.starWrapper.className,
  );

  !state.readOnly && (state.input.className = mergeClasses(inputStyles.input, state.input.className));

  return state;
};
