import { Card } from "@tremor/react";
import { Bar } from "./Charts/Bar";
import DashboardEmptyState from "./DashboardEmptyState";
import CardsRow from "./StatCards/DashboardCardsRow";

const DashboardContainer = (props: any) => {
    const { userDetails } = props;
    const { totalUserActions, totalCo2Saved, totalWasteSaved, totalWaterSaved } = userDetails;
    
    return (
        <div className="w-full flex flex-col flex-wrap sm:flex-row">
        {
            (totalUserActions == 0)
            ? 
                <DashboardEmptyState />
            : 
                <>
                    <CardsRow 
                        totalCo2Saved={totalCo2Saved}
                        totalWasteSaved={totalWasteSaved}
                        totalWaterSaved={totalWaterSaved}
                    />
                    <Card className="md:mx-3">
                        <Bar />
                    </Card>
                </>
                
        }
        </div>
    );
  };
  
  export default DashboardContainer;