import { ScatterChart } from '@tremor/react';
import { useEffect, useState } from 'react';

export const Scatter = (props: any) => {
  const { userActions } = props;
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const userActionsData = userActions
      .filter((action: any) => new Date(action.logDate) > oneMonthAgo)
      .map((action: any) => ({
        'Action name': action.action.name,
        'Impact points': action.action.impactPoints,
        'Action points': action.action.actionPoints,
      }));
    setChartData(userActionsData);
  };

  useEffect(() => {
    if (userActions && userActions.length > 0) {
      prepareChartData();
    }
  }, [userActions]);

  return (
    <ScatterChart
      className="h-80"
      data={chartData}
      category="Action name"
      x="Action points"
      y="Impact points"
      size="Impact points"
      showOpacity={true}
      minYValue={5}
      valueFormatter={{
        x: (impactPoints) => `${impactPoints}`,
        y: (actionPoints) => `${actionPoints}`,
        size: (size) => `${size} impact points`,
      }}
      showLegend={true}
      enableLegendSlider
    />
  );
};
