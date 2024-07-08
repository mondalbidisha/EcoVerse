import DashboardLayout from "../components/DashboardLayout";
import ErrorBoundary from "../components/ErrorBoundary";

const Dashboard = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <DashboardLayout />
      </div>
    </ErrorBoundary>
    
  );
};

export default Dashboard;