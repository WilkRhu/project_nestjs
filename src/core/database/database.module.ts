import { Module } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            username: 'root',
            password: '123',
            database: 'project',
            entities: [User],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule { }