import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import { reactPlugin } from '../lib/appInsights'
import { AppInsightsErrorBoundary } from '@microsoft/applicationinsights-react-js'

function errorBoundaryContent() {
  return (
    <div>
        <h2>An error has ocurred.</h2>
        <h3>
            <a onClick={() => window.location.reload()}>
            Click here to Reload
            </a>
        </h3>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <AppInsightsErrorBoundary
      onError={() => errorBoundaryContent()}
      appInsights={reactPlugin}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppInsightsErrorBoundary>
  )
}

export default MyApp
