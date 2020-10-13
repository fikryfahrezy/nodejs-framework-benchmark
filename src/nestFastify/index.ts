import { NestFactory } from '@nestjs/core';
import { Module, Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

@Controller('api')
class Controllers {
  @Get()
  get(@Query('name') name: string): string {
    return `Hi ${name} from nest-fastify`;
  }
}

@Module({
  controllers: [Controllers],
})
class AppModule {}

async function nestFastifyStart() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(5000);
}

export default nestFastifyStart;
