import { BarChart } from '@tremor/react';
import { useEffect, useState } from 'react';

const dataFormatter = (number: number) => Intl.NumberFormat('us').format(number).toString();

export const Bar = (props: any) => {
  const { userActions } = props;
  const [chartData, setChartData] = useState([]);

  const countActionOccurrences = (logs: any) => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const filteredLogs: any = logs.filter((log: any) => new Date(log.logDate) > oneMonthAgo);

    const actionCounts = filteredLogs.reduce((acc: any, log: any) => {
      if (acc[log.actionId]) {
        acc[log.actionId].count += 1;
      } else {
        acc[log.actionId] = { name: log.name, count: 1 };
      }
      return acc;
    }, {});

    return Object.values(actionCounts);
  };

  const prepareChartData = () => {
    const actionCounts = countActionOccurrences(userActions);
    const userActionsData: any = actionCounts.map((action: any) => ({
      name: action.name,
      'Number of actions logged': action.count,
    }));
    setChartData(userActionsData);
  };

  useEffect(() => {
    if (userActions && userActions.length > 0) {
      prepareChartData();
    }
  }, [userActions]);

  return (
    <BarChart
      data={chartData}
      index="name"
      categories={['Number of actions logged']}
      colors={['blue']}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  );
};
