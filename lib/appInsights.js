// AppInsights.js
import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin } from '@microsoft/applicationinsights-react-js'
import { globalHistory } from '@reach/router'

const reactPlugin = new ReactPlugin()
const appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: process.env.NEXT_PUBLIC_APPINSIGHTS_KEY,
        extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: { history: globalHistory },
        },
      },
    })
if (appInsights) appInsights.loadAppInsights()
export { reactPlugin, appInsights }
