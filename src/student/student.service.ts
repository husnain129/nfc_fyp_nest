// import { BadRequestException, Injectable } from '@nestjs/common';

// @Injectable()
// export class StudentService {
//   constructor() {}

//   async getStudent(username: string) {
//     return await this.cacheManager.get(username);
//   }

//   async setStudent(username: string) {
//     try {
//       const student = {
//         name: username,
//         age: 12,
//       };
//       await this.cacheManager.set<Object>(username, student);
//       return student;
//     } catch (error) {
//       throw new BadRequestException('Cache student data');
//     }
//   }
// }
