import {
  BadRequestException,
  Body,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

@Controller('student')
export class StudentController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get()
  async getStudent() {
    let name = await this.cacheManager.get<string>('name');
    console.log('username', name);
    if (name) {
      return name;
    }
    return 'no name';
  }

  @Post()
  async setStudent(@Body('username') studentName: string) {
    try {
      console.log('username: ', studentName);
      const student = {
        name: studentName,
        age: 23,
      };
      return await this.cacheManager.set<Object>('name', student);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Cache student data');
    }
  }
}
