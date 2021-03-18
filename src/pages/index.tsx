import { createServer, Model } from 'miragejs';

import { Header } from '../components/Header'
import { Todolist } from '../components/Todolist'

createServer({
  models: {
    todo: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/todos', () => {
      return this.schema.all('todo');
    });

    this.post('/todos', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('todo', data);
    });
  }
});

export default function Home() {
  return (
    <>
      <Header />
      <Todolist />
    </>
  )
}
