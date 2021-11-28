import * as React from 'react';
import Link from 'next/link';
import { makeStyles } from '@fluentui/react-make-styles';
import { LogoIcon } from '@pongoai/react-icon';
import { Text } from '@pongoai/react-text';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Button } from '@pongoai/react-button';

import { Select } from '@pongoai/react-textfield';

const useStyles = makeStyles({
  timelineCard: { display: 'inline-block', padding: '30px', borderRadius: '10px', backgroundColor: 'white' },
  timelineTitle: { marginBottom: '20px' },
  metricContainer: { marginTop: '10px' },
  graphContainer: {
    border: '1px solid black',
    width: '25vw',
    height: '30vh',
    minHeight: '160px',
    minWidth: '200px',
    borderRadius: '10px',
    padding: '0px 3px 15px 3px',
    marginTop: '15px',
  },
  graphSpacer: { width: '1px', height: '10px' },
  textField: { zIndex: 2 },
});

export const ReviewTimeline = () => {
  const styles = useStyles();
  const [data, setData] = React.useState([
    {
      date: '2019',
      rating: 5,
      NPS: 10,
    },
    {
      date: '2020',
      rating: 1,
      NPS: 9,
    },
    {
      date: '2021',
      rating: 3,
      NPS: 4,
    },
    {
      date: '2022',
      rating: 4,
      NPS: 8,
    },
  ]);
  const [dateFormat, setDateFormat] = React.useState('Year');
  const [filter, setFilter] = React.useState('rating');
  //expects data to be a list of JSON objects with {date, rating}
  //where date is the identifying string (day/month/year)
  //where rating is an int 1<=rating<=5
  function setToDay() {
    setDateFormat('Day');
    setData([
      {
        date: 'moday',
        rating: 2,
        NPS: 4,
      },
      {
        date: 'tuesday',
        rating: 4,
        NPS: 9,
      },
      {
        date: 'wednesday',
        rating: 5,
        NPS: 2,
      },
      {
        date: 'thursday',
        rating: 3,
        NPS: 5,
      },
      {
        date: 'friday',
        rating: 3,
        NPS: 8,
      },
      {
        date: 'saturday',
        rating: 2,
        NPS: 4,
      },
      {
        date: 'sunday',
        rating: 1,
        NPS: 1,
      },
    ]);
  }

  function setToMonth() {
    setDateFormat('Month');
    setData([
      {
        date: 'Jan',
        rating: 1,
        NPS: 8,
      },
      {
        date: 'Feb',
        rating: 2,
        NPS: 3,
      },
      {
        date: 'March',
        rating: 3,
        NPS: 9,
      },
      {
        date: 'April',
        rating: 3,
        NPS: 6,
      },
      {
        date: 'May',
        rating: 4,
        NPS: 10,
      },
      {
        date: 'June',
        rating: 5,
        NPS: 10,
      },
      {
        date: 'July',
        rating: 4,
        NPS: 3,
      },
      {
        date: 'Audust',
        rating: 5,
        NPS: 10,
      },
      {
        date: 'Sept',
        rating: 3,
        NPS: 7,
      },
      {
        date: 'Oct',
        rating: 2,
        NPS: 4,
      },
      {
        date: 'Nov',
        rating: 2,
        NPS: 3,
      },
      {
        date: 'Dec',
        rating: 1,
        NPS: 9,
      },
    ]);
  }

  function setToYear() {
    setDateFormat('Year');
    setData([
      {
        date: '2019',
        rating: 5,
        NPS: 3,
      },
      {
        date: '2020',
        rating: 1,
        NPS: 4,
      },
      {
        date: '2021',
        rating: 3,
        NPS: 8,
      },
      {
        date: '2022',
        rating: 4,
        NPS: 9,
      },
    ]);
  }

  const handleTimeframeChange = (e: any) => {
    if (e.target.innerText == 'Yearly') setToYear();
    else if (e.target.innerText == 'Monthly') setToMonth();
    else setToDay();
  };

  const handleFilterChange = (e: any) => {
    setFilter(String(e.target.dataset.value));
  };

  const timeframeOptions = [
    { value: 'Yearly', label: 'Yearly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Daily', label: 'Daily' },
  ];

  const metricOptions = [
    { value: 'rating', label: 'Star Rating' },
    { value: 'NPS', label: 'Net Promoter Score' },
  ];

  return (
    <div className={styles.timelineCard}>
      <div className={styles.timelineTitle}>
        <Text weight="bold" size={600}>
          Timeline
        </Text>
      </div>

      <Select
        appearance="outlined"
        placeholder="Timeframe"
        label="Timeframe"
        options={timeframeOptions}
        onChange={handleTimeframeChange}
        className={styles.textField}
      />
      <div className={styles.metricContainer}>
        <Select
          appearance="outlined"
          placeholder="Metric"
          label="Metric"
          options={metricOptions}
          onChange={handleFilterChange}
          className={styles.textField}
        />
      </div>

      <div className={styles.graphContainer}>
        <div className={styles.graphSpacer}> </div>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip />

            <YAxis
              label={{ value: filter, angle: -90, position: 'insideLeft' }}
              axisLine={false}
              interval={0.1}
              width={20}
              tick={false}
              domain={filter == 'rating' ? [0, 5] : [0, 10]}
            />
            <XAxis
              dataKey="date"
              label={{ value: dateFormat }}
              axisLine={false}
              interval={0.1}
              width={20}
              tick={false}
            />

            <ReferenceLine y={0} isFront={false} strokeWidth={1} stroke="#1B78AA" />
            <ReferenceLine y={1} isFront={false} strokeWidth={0.3} />
            <ReferenceLine y={2} isFront={false} strokeWidth={0.3} />
            <ReferenceLine y={3} isFront={false} strokeWidth={0.3} />
            <ReferenceLine y={4} isFront={false} strokeWidth={0.3} />
            <ReferenceLine y={5} isFront={false} strokeWidth={0.3} />
            {filter == 'NPS' ? (
              [
                <ReferenceLine key="6" y={6} isFront={false} strokeWidth={0.3} />,
                <ReferenceLine key="7" y={7} isFront={false} strokeWidth={0.3} />,
                <ReferenceLine key="8" y={8} isFront={false} strokeWidth={0.3} />,
                <ReferenceLine key="9" y={9} isFront={false} strokeWidth={0.3} />,
                <ReferenceLine key="10" y={10} isFront={false} strokeWidth={0.3} />,
              ]
            ) : (
              <div></div>
            )}
            <Line type="linear" dataKey={filter} stroke="#090909" strokeWidth={1.5} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
