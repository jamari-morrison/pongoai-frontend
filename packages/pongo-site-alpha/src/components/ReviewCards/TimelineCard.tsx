import * as React from 'react';
import { CalendarIcon } from '@pongoai/react-icon';
import { Select } from '@pongoai/react-textfield';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { Card } from './Card';

type timelineData = {
  name: string;
  rating: number;
  nps: number;
  submissions: number;
}[];

type SubmissionsCardProps = {
  /**
   * The daily collected survey data.
   */
  dailyData: timelineData;

  /**
   * The weekly collected survey data.
   */
  weeklyData: timelineData;

  /**
   * The monthly collected survey data.
   */
  monthlyData: timelineData;

  /**
   * The yearly collected survey data.
   */
  yearlyData: timelineData;
};

const timelineMetricOptions = [
  { value: 'submissions', label: 'Submissions' },
  { value: 'rating', label: 'Rating' },
  { value: 'nps', label: 'NPS Score' },
];

const timelineOptions = [
  { value: 'dailyData', label: 'Daily' },
  { value: 'weeklyData', label: 'Weekly' },
  { value: 'monthlyData', label: 'Monthly' },
  { value: 'yearlyData', label: 'Yearly' },
];

const wrapperStyles: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '20px' };
const selectWrapperStyles: React.CSSProperties = { display: 'flex', gap: '10px' };
const selectStyles: React.CSSProperties = { zIndex: '10', width: '180px', height: '45px' };
const lineChartStyles: React.CSSProperties = { padding: '0px', margin: '0px', left: '-40px' };

export const TimelineCard = (props: SubmissionsCardProps) => {
  const [metricValue, setMetricValue] = React.useState('submissions');
  const [timeValue, setTimeValue] = React.useState<'dailyData' | 'weeklyData' | 'monthlyData' | 'yearlyData'>(
    'weeklyData',
  );

  const onMetricChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>, data: { value: string }) => {
    setMetricValue(data.value);
  }, []);

  const onTimeValueChange = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>, data: any) => {
    setTimeValue(data.value);
  }, []);

  return (
    <Card headerText={'Timeline'} size="medium">
      <div style={wrapperStyles}>
        <div style={selectWrapperStyles}>
          <Select
            value={timeValue}
            onChange={onTimeValueChange}
            options={timelineOptions}
            appearance="outlined"
            style={selectStyles}
            prefix={<CalendarIcon color="inherit" />}
          />
          <Select
            value={metricValue}
            onChange={onMetricChange}
            options={timelineMetricOptions}
            appearance="outlined"
            style={selectStyles}
          />
        </div>
        <div>
          <LineChart width={570} height={300} data={props[timeValue]} style={lineChartStyles}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip animationDuration={150} />
            <Line type="monotone" dataKey={metricValue} animationDuration={200} />
          </LineChart>
        </div>
      </div>
    </Card>
  );
};
