import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/health', (c) => {
  return c.text('OK')
})

app.get('/docs', (c) => {
  return c.text('Documentation goes here')
})

export default app
