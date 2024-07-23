import ActionsLayout from '../components/ActionsLayout';
import ErrorBoundary from '../components/ErrorBoundary';

const Actions = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <ActionsLayout />
      </div>
    </ErrorBoundary>
  );
};

export default Actions;
