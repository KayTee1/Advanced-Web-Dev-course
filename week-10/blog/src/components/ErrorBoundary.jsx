import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: Something went wrong!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
