import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { Theme } from '@pongoai/react-theme';

type NpsIndicatorProps = {
  /**
   * The net promoter score to display (decimal values will be rounded).
   */
  nps: number;

  /**
   * The size of the NPS score icon
   */
  size: 'small' | 'medium' | 'large';
};

const useNpsIconStyles: any = makeStyles({
  icon: {
    position: 'relative',
    color: 'white',
    borderRadius: '100%',
    display: 'flex',
    verticalAlign: 'middle',
    userSelect: 'none',
    flexShrink: 0,
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    width: '28px',
    height: '28px',
    fontSize: '10px',
  },
  medium: {
    width: '40px',
    height: '40px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  large: {
    width: '70px',
    height: '70px',
    fontSize: '35px',
  },
  0: (theme: Theme) => ({
    background: theme.palette.errorPressed,
  }),
  10: (theme: Theme) => ({
    background: theme.palette.errorPressed,
  }),
  20: (theme: Theme) => ({
    background: theme.palette.errorPressed,
  }),
  30: (theme: Theme) => ({
    background: theme.palette.error,
  }),
  40: (theme: Theme) => ({
    background: theme.palette.error,
  }),
  50: (theme: Theme) => ({
    background: theme.palette.warning,
  }),
  60: (theme: Theme) => ({
    background: theme.palette.warningHover,
  }),
  70: (theme: Theme) => ({
    background: theme.palette.brand,
  }),
  80: (theme: Theme) => ({
    background: theme.palette.brandPressed,
  }),
  90: (theme: Theme) => ({
    background: theme.palette.success,
  }),
  100: (theme: Theme) => ({
    background: theme.palette.successPressed,
  }),
  unknown: (theme: Theme) => ({
    background: theme.palette.inheritDisabled,
  }),
});

export const NpsIndicator = (props: NpsIndicatorProps) => {
  const { nps, size = 'medium' } = props;
  const roundedNps = Math.ceil(nps / 10) * 10;
  const styles = useNpsIconStyles();

  const iconStyles = mergeClasses(
    styles.icon,
    nps !== undefined && nps > -1 && nps <= 100 ? styles[roundedNps] : styles.unknown,
    styles[size],
  );

  return <div className={iconStyles}>{nps !== undefined && nps > -1 ? Math.round(nps) : '?'}</div>;
};
