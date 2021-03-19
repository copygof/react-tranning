let envSource = process.env

if ((window as any)._env != null) {
  // window.env is set only from env-override.js which is generated inside docker startup.
  // local run won't have this property initialized.

  envSource = (window as any)._env
}

/* Get constants from environment variables.
 * Values are configured in .env (for development) and .env.production (for staging and production)
 */
const {
  NODE_ENV,
  REACT_APP_TITLE,
  REACT_APP_API_ENDPOINT,
} = envSource

export default {
  NODE_ENV,
  TITLE: REACT_APP_TITLE ?? "",
  API_ENDPOINT: REACT_APP_API_ENDPOINT ?? "",
}
