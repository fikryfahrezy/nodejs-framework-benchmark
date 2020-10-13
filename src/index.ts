import bareNode from './bare';
import express from './express';
import fastify from './fastify';
import nestExpress from './nestExpress';
import nestFastify from './nestFastify';
import koa from './koa';

const arg: string = process.argv[2];

if (arg === 'bare-node') {
  bareNode();
} else if (arg === 'express') {
  express();
} else if (arg === 'koa') {
  koa();
} else if (arg === 'fastify') {
  fastify();
} else if (arg === 'nest-express') {
  nestExpress();
} else if (arg === 'nest-fastify') {
  nestFastify();
} else {
  process.exit(1);
}

process.on('unhandledRejection', (reason: any) => {
  console.log(reason);
});

process.on('uncaughtException', (reason: any) => {
  console.log(reason);
});
