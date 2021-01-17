import { NestFactory } from '@nestjs/core';
import { Module, Query, Controller, Get } from '@nestjs/common';

@Controller('api')
class Controllers {
  @Get()
  async get(@Query('name') name: string) {
    const response = { message: `Hi ${name} from nest` };
    return response;
  }
}

@Module({
  controllers: [Controllers],
})
class AppModule {}

(async () => {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`nest server running on http://localhost:${PORT}`);
  });
})();
