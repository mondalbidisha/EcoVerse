import { 
    Component, 
    ErrorInfo, 
    ReactNode 
} from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="grid grid-cols-1 min-w-screen min-h-screen">
          <h1>Something went wrong !! Please try again later ...</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;