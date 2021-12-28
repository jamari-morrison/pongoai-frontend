import {
  NpsOne,
  NpsTwo,
  NpsThree,
  NpsFour,
  NpsFive,
  NpsSix,
  NpsSeven,
  NpsEight,
  NpsNine,
  NpsTen,
  NpsUnknown,
} from '../NpsIndicator/npsIcons';

type NpsIndicatorProps = {
  /**
   * The net promoter score to display (decimal values will be rounded).
   */
  nps: number;
};

export const NpsIndicator = (props: NpsIndicatorProps) => {
  const { nps } = props;
  const roundedNps = Math.round(nps);

  switch (roundedNps) {
    case 1:
      return <NpsOne />;
    case 2:
      return <NpsTwo />;
    case 3:
      return <NpsThree />;
    case 4:
      return <NpsFour />;
    case 5:
      return <NpsFive />;
    case 6:
      return <NpsSix />;
    case 7:
      return <NpsSeven />;
    case 8:
      return <NpsEight />;
    case 9:
      return <NpsNine />;
    case 10:
      return <NpsTen />;
  }
  return <NpsUnknown />;
};
