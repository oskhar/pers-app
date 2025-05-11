import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';
import { ErrorFilter } from './common/filter/error.filter';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new ErrorFilter());

  app.use(
    '/uploads/image',
    express.static(join(process.cwd(), 'uploads/image')),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
