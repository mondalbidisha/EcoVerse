import ChallengeLayout from '../components/ChallengeLayout';
import ErrorBoundary from '../components/ErrorBoundary';

const Challenge = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <ChallengeLayout />
      </div>
    </ErrorBoundary>
  );
};

export default Challenge;
