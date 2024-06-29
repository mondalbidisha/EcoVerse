import { Layout } from "./Dashboard/Layout";
import ActivityCards from "./StatCards/ActivityCards";

const ActivityLayout = () => {
    return (
      <Layout>
        <div className="md:min-h-screen sm:h-screen grid grid-cols-1 md:grid-cols-1 bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 p-10">
          <div className="flex flex-col flex-wrap sm:flex-row">
            <ActivityCards />
          </div>
        </div>
      </Layout>
    );
  };
  
  export default ActivityLayout;