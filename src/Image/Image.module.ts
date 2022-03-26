import { Module } from '@nestjs/common';
import { ImageController } from './Image.controller';

@Module({
  controllers: [ImageController],
})
export class ImageModule {}
