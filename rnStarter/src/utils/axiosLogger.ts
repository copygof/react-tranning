class AxiosLogger {
  colors = {
    text: 'inherit',
    title: '#5C8ED6',
    gray: '#9E9E9E',
    request: '#03A9F4',
    success: '#4CAF50',
    failure: '#F20404',
    heightlight: '#bada55',
  }

  disable = false

  constructor(disable?: boolean) {
    this.disable = disable || this.disable
  }

  setTextColor(text: string[], colors: string[]) {
    return [
      `%c${text.join(' %c')}`,
      ...colors.map((color) => `color: ${color}; background-color: #FFF9E5;`),
      '',
    ]
  }

  logRequestSuccess(config: any) {
    if (this.disable) {
      return
    }

    console.groupCollapsed(
      ...this.setTextColor(
        [' axios', 'request:', config.method?.toLocaleUpperCase(), config.url],
        [
          this.colors.title,
          this.colors.request,
          this.colors.text,
          this.colors.text,
        ],
      ),
    )
    console.log('header  =>', config.headers.common)
    console.log('url     =>', `${config.baseURL}${config.url}`)
    console.log('params  =>', config.params || '-')
    console.log('body    =>', config.data || '-')
    console.groupEnd()
  }

  logRequestFailure(error: Error) {
    if (this.disable) {
      return
    }

    console.groupCollapsed(
      ...this.setTextColor(
        [
          ' axios response error from client',
          error.config?.method?.toLocaleUpperCase(),
          error.config?.url,
        ],
        [this.colors.failure, this.colors.text, this.colors.text],
      ),
    )
    console.log('============= Error from client =============')
    console.log(error)
    console.groupEnd()
  }

  logResponseSuccess(response: any) {
    if (this.disable) {
      return
    }

    console.groupCollapsed(
      ...this.setTextColor(
        [
          ' axios',
          'response:',
          response.config.method?.toLocaleUpperCase(),
          response.config.url,
        ],
        [
          this.colors.title,
          this.colors.success,
          this.colors.text,
          this.colors.text,
        ],
      ),
    )
    const endTime = new Date()
    // @ts-ignore
    const duration = endTime - (response.config.metadata.startTime || endTime)
    console.log('response time    =>', duration, 'ms')

    console.log(
      'url              =>',
      `${response.config.baseURL}${response.config.url}`,
    )
    console.log('status           =>', response.status || '-')
    console.log('response.data    =>', response.data || '-')
    console.groupEnd()
  }

  logResponseFailure(error: Error) {
    if (this.disable) {
      return
    }

    const getTitleError = () => {
      if (error.response) {
        return 'response error from server'
      } else if (error.request) {
        return 'server is not response'
      }
      return 'response error from client'
    }

    console.groupCollapsed(
      ...this.setTextColor(
        [
          ` axios ${getTitleError()}`,
          error.config?.method?.toLocaleUpperCase(),
          error.config?.url,
        ],
        [this.colors.failure, this.colors.text, this.colors.text],
      ),
    )

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(
        'url                     =>',
        `${error.config?.baseURL}${error.config?.url}`,
      )
      const isBackEndResponseHTML =
        error.response?.headers['content-type'] === 'text/html'

      console.log('error.response.status   =>', error.response?.status)
      console.log('error.response.headers  =>', error.response?.headers)
      console.log(
        'error.response.data     =>',
        isBackEndResponseHTML ? 'text/html' : error.response?.data,
      )
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('XMLHttpRequestError     =>', error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error  =>', error.message)
    }

    console.groupEnd()
  }
}

export default AxiosLogger
