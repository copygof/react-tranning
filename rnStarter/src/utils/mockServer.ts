import _ from 'lodash'
import { createServer, Response } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    // Responding to a POST request
    this.post('/movies', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)
      attrs.id = Math.floor(Math.random() * 100)

      return { movie: attrs }
    })

    // Using the `timing` option to slow down the response
    this.get(
      '/movies',
      () => {
        return {
          movies: [
            { id: 1, name: 'Inception', year: 2010 },
            { id: 2, name: 'Interstellar', year: 2014 },
            { id: 3, name: 'Dunkirk', year: 2017 },
          ],
        }
      },
      { timing: 4000 },
    )

    // Using the `Response` class to return a 500
    this.delete('/movies/1', () => {
      const headers = {}
      const data = { errors: ['Server did not respond'] }

      return new Response(500, headers, data)
    })

    this.post('/login', (schema, request) => {
      const requestBody = JSON.parse(request.requestBody)

      if (requestBody.userName !== 'admin' && requestBody.password !== '1234') {
        const headers = {}
        const data = { errors: ['User not found'] }

        return new Response(400, headers, data)
      }

      console.log('login ', request)

      return {
        token: _.uniqueId(),
        userInfo: {
          name: 'คุณบริดสโตน',
        },
      }
    })

    this.get('/point', (schema, request) => {
      return {
        point: 3650,
      }
    })

    this.get('/news', (schema, request) => {
      return [
        {
          title: 'Title1',
          detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          title: 'Title2',
          detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          title: 'Title3',
          detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          title: 'Title4',
          detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          title: 'Title5',
          detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
          title: 'Title6',
          detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
      ]
    })

    this.get('/highlight', (schema, request) => {
      return {
        title: 'พนักงานดีเด่นประจำปี',
        detail: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      }
    })
  },
})
