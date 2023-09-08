import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidateInputPipe } from './core/pipe/validates.pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Project Estudos Nestjs')
  .setDescription('Api de estudos para o framework nestjs')
  .setVersion('1.0')
  .addTag('app')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
app.useGlobalPipes(new ValidateInputPipe)
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
