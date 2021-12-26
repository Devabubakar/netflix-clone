import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasErrored: boolean;
}
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasErrored: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasErrored: true };
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error);
  }

  public render() {
    if (this.state.hasErrored) {
      return <div>Something went wrong </div>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
