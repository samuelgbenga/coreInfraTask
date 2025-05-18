import React from 'react';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error: Error): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-[#5096EC] mb-2">Oops! Something went wrong</h2>
              <p className="text-gray-600">We apologize for the inconvenience. Please try refreshing the page.</p>
            </div>
            
            <details className="bg-gray-50 rounded-lg p-4">
              <summary className="text-sm font-medium text-gray-700 cursor-pointer hover:text-[#5096EC] mb-2">
                Error Details
              </summary>
              <div className="mt-2 text-sm text-gray-600 space-y-2">
                {this.state.error && (
                  <div className="bg-red-50 p-3 rounded-md">
                    <p className="font-medium text-red-800">{this.state.error.toString()}</p>
                  </div>
                )}
                {this.state.errorInfo && (
                  <div className="bg-gray-100 p-3 rounded-md overflow-x-auto">
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                )}
              </div>
            </details>

            <div className="mt-6 text-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#5096EC] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 