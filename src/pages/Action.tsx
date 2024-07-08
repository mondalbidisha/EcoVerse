import AddActionLayout from "../components/AddActionLayout";
import ErrorBoundary from "../components/ErrorBoundary";

const Action = () => {
  
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <AddActionLayout />
      </div>
    </ErrorBoundary>
  );
};

export default Action;