import ActivityLayout from '../components/ActivityLayout';
import ErrorBoundary from '../components/ErrorBoundary';

const Activity = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <ActivityLayout />
      </div>
    </ErrorBoundary>
  );
};

export default Activity;
