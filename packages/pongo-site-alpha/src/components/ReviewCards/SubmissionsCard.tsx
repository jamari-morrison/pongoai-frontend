import { Text, Body } from '@pongoai/react-text';
import { Card } from './Card';

type SubmissionsCardProps = {
  /**
   * The total number of survey submissions.
   */
  totalSubmissions: String;

  /**
   * The number of survey submission this month.
   */
  monthlySubmissions: String;
};

export const SubmissionsCard = (props: SubmissionsCardProps) => {
  const { totalSubmissions, monthlySubmissions } = props;

  return (
    <Card headerText={'Submissions'}>
      <Body>Total submissions</Body>
      <Text size={700} weight="bold">
        {totalSubmissions}
      </Text>
      <Body color="success">+{monthlySubmissions} in September</Body>
    </Card>
  );
};
