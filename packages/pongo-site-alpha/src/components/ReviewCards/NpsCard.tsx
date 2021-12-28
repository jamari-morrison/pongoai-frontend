import { SubHeadline, Body } from '@pongoai/react-text';
import { NpsIndicator } from '../NpsIndicator';
import { Card } from './Card';

type NpsCardProps = {
  /**
   * The total nps score collected from survey submissions.
   */
  totalNps: number;

  /**
   * The monthly change in the NPS score.
   */
  monthlyNps: String;
};

const textPadding = { paddingLeft: '10px' };
const npsIconWrapper = { verticalAlign: 'middle' };

export const NpsCard = (props: NpsCardProps) => {
  const { totalNps, monthlyNps } = props;

  return (
    <Card headerText={'Average NPS'}>
      <span>
        <span style={npsIconWrapper}>
          <NpsIndicator nps={totalNps} />
        </span>
        <Body style={textPadding}>Average - </Body>
        <SubHeadline>{totalNps}</SubHeadline>
      </span>
      <Body color="success">{monthlyNps} in September</Body>
    </Card>
  );
};
