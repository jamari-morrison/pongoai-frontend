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
  monthlyNps: number;
};

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

export const NpsCard = (props: NpsCardProps) => {
  const { totalNps, monthlyNps } = props;

  return (
    <Card headerText={'Average NPS'}>
      <NpsIndicator nps={totalNps} size="large" />
      <span>
        <SubHeadline color={monthlyNps !== 0 ? (monthlyNps > 0 ? 'success' : 'error') : undefined}>
          {monthlyNps}
        </SubHeadline>
        <Body> for {month}</Body>
      </span>
    </Card>
  );
};
