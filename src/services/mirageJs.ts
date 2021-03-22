import { createServer, Model } from 'miragejs';

export default createServer({
  models: {
    todo: Model,
  },

  seeds(server) {
    server.db.loadData({
      todos: [
        {
          id: 1,
          title: 'Terminar o app',
          completed: false,
        },
        {
          id: 2,
          title: 'Terminar as seeds',
          completed: true,
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/todos', (schema, _) => {
      return schema.all('todo');
    });

    this.post('/todos', (schema, request) => {
      const todo = JSON.parse(request.requestBody)

      return schema.create('todo', todo);
    });

    this.delete('/todos/:id', (schema, request) => {
      const id = request.params.id;

      schema.findBy('todo', {id}).destroy();
      
      return { status: 'deleted' };
    });

    this.put('/todos/:id', (schema, request) => {
      const id = request.params.id;
      const todo = schema.findBy('todo', {id});
      todo.update({ completed: !todo.attrs.completed });

      return { status: 'altered' };
    })
  }
});
