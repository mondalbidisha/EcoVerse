import { Card } from '@tremor/react';
import { Bar } from './Charts/Bar';
import DashboardEmptyState from './DashboardEmptyState';
import CardsRow from './StatCards/DashboardCardsRow';
import { Scatter } from './Charts/Scatter';

const DashboardContainer = (props: any) => {
  const { userDetails, userActions } = props;
  const { totalUserActions, totalCo2Saved, totalWasteSaved, totalWaterSaved } = userDetails;

  return (
    <div className="w-full flex flex-col flex-wrap sm:flex-row">
      {totalUserActions == 0 ? (
        <DashboardEmptyState />
      ) : (
        <>
          <CardsRow totalCo2Saved={totalCo2Saved} totalWasteSaved={totalWasteSaved} totalWaterSaved={totalWaterSaved} />
          <Card className="md:mx-3 my-5">
            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              Frequency of actions logged
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content leading-6">
              The chart displays data from the previous month up to the current day.
            </p>
            <Bar userActions={userActions} />
          </Card>
          <Card className="md:mx-3 my-5">
            <p className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              Impact points accrued for each action logged
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content leading-6">
              The chart displays data from the previous month up to the current day.
            </p>
            <Scatter userActions={userActions} />
          </Card>
        </>
      )}
    </div>
  );
};

export default DashboardContainer;
