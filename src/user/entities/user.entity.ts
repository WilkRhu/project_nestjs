import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @Column({
    unique: true,
  })
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  ddd: string;

  @Column()
  @IsString()
  phone: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @Exclude()
  password: string;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
