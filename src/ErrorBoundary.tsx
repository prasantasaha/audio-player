import React, { Component } from 'react';

interface IErrorState {
  hasError: boolean;
}
class ErrorBoundary extends Component<{}, IErrorState> {
  state = { hasError: false };

  static getDerivedStateFromError(error: unknown) {
    if (error) {
      console.log(error);
      return { hasError: true };
    }
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
