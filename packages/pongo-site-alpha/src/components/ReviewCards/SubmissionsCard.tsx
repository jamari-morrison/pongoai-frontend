import { SubHeadline, Body, Header1 } from '@pongoai/react-text';
import { Card } from './Card';

type SubmissionsCardProps = {
  /**
   * The total number of survey submissions.
   */
  totalSubmissions: number;

  /**
   * The number of survey submission this month.
   */
  monthlySubmissions: number;
};

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

export const SubmissionsCard = (props: SubmissionsCardProps) => {
  const { totalSubmissions, monthlySubmissions } = props;

  return (
    <Card headerText={'Submissions'}>
      <Body>Total submissions</Body>
      <Header1 weight="bold">{totalSubmissions}</Header1>
      <div>
        <SubHeadline color={monthlySubmissions !== 0 ? (monthlySubmissions > 0 ? 'success' : 'error') : undefined}>
          {monthlySubmissions}
        </SubHeadline>
        <Body> new in {month}</Body>
      </div>
    </Card>
  );
};
