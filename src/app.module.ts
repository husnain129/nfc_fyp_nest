import { Module } from '@nestjs/common';
import { ImageController } from './Image/Image.controller';
import { ImageModule } from './Image/Image.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ImageModule, StudentModule],
  controllers: [ImageController],
})
export class AppModule {}
