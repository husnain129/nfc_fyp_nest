import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();
  await app.listen(PORT, () =>
    console.log(`Server is running on PORT: ${PORT}`),
  );
}
bootstrap();
