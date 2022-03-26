import { Module } from '@nestjs/common';
import { StudentGateway } from './student.gateway';

@Module({
    providers:[StudentGateway]
})
export class StudentModule {}
