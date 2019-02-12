import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import next from 'next';
import { DbConnection } from './other';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handler = app.getRequestHandler();
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

app.prepare().then(async () => {
  const server = fastify();

  const db = new DbConnection();

  server.get('/', async (request: any, reply: any) => {
    return app.render(request.raw, reply.res, '/Index');
  });

  server.get('*', (request: any, reply: any) => {
    return handler(request.raw, reply.res);
  })

  server.listen(port);
});