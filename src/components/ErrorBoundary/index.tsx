import React, { Component, ErrorInfo } from 'react';

import { isProduction } from '../../constants';

import './ErrorBoundary.scss';
import { ErrorBoundaryCopy, ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary';

const errorBoundaryCopy: ErrorBoundaryCopy = {
  errorBoundary: {
    message: 'An error occurred',
    reload: 'Reload page',
  },
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    error: '',
    hasError: false,
  };

  copy = errorBoundaryCopy;

  static getDerivedStateFromError(e: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(e: Error, errorInfo: ErrorInfo) {
    if (isProduction()) console.log(`error caught in error boundery: ${e.message}. Trace stack: ${errorInfo.componentStack}`);
    else console.log('error caught in error boundary', { e, errorInfo });
    this.setState({ error: e.message });
  }

  onReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
        <div className="errorPage">
          <h1>{this.copy.errorBoundary.message}</h1>
          <button id="errorBoundary" onClick={this.onReload}>
            {this.copy.errorBoundary.reload}
          </button>
        </div>
        </>
      );
    }
    return (<>{this.props.children}</>);
  }
}
