import { NestFactory } from '@nestjs/core';
import { Module, Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

@Controller('api')
class Controllers {
  @Get()
  get(@Query('name') name: string): string {
    return `Hi ${name} from nest-express`;
  }
}

@Module({
  controllers: [Controllers],
})
class AppModule {}

async function nestExpressStart() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}

export default nestExpressStart;
