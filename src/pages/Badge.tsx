import BadgeLayout from "../components/BadgeLayout";
import ErrorBoundary from "../components/ErrorBoundary";

const Badge = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 min-w-screen min-h-screen">
        <BadgeLayout />
      </div>
    </ErrorBoundary>
  );
};

export default Badge;