import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.scss';
import FullLayout from './layout/FullLayout';
import { Page } from './types/Page';
import { FullScreenSpinner } from './components/FullScreenSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { CustomRoute } from './routes/Custom';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './screens/Home'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <FullLayout>
            <ErrorBoundary>
              <Suspense fallback={<FullScreenSpinner />}>
                <Switch>
                  <CustomRoute
                    path={ Page.main }
                    component={ Home } />
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </FullLayout>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
