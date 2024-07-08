import ErrorBoundary from '../components/ErrorBoundary';
import Quote from '../components/Quote';
import Register from '../components/Register';

const Signup = () => {
  return (
    <ErrorBoundary>
      <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen">
        <Register />
        <Quote />
      </div>
    </ErrorBoundary>
  );
};

export default Signup;