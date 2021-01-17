import { NestFactory } from '@nestjs/core';
import { Module, Query, Controller, Get } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

@Controller('api')
class Controllers {
  @Get()
  async get(@Query('name') name: string) {
    const response = { message: `Hi ${name} from nest-fastify` };
    return response;
  }
}

@Module({
  controllers: [Controllers],
})
class AppModule {}

(async () => {
  const PORT = 5000;

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(PORT, () => {
    console.log(`nest with fastify server running on http://localhost:${PORT}`);
  });
})();
