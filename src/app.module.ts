import { Module } from '@nestjs/common';
import { ImageController } from './Image/Image.controller';
import { ImageModule } from './Image/Image.module';

@Module({
  imports: [ImageModule],
  controllers: [ImageController],
})
export class AppModule {}
