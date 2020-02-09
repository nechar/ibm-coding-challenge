import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Swagger } from './utils';
import { config } from '../config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swagger = new Swagger(app);
  swagger.build();
  await app.listen(config.portNumber);
  swagger.log();
}

bootstrap();
