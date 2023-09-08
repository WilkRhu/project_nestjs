import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryColumn('uuid')
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

  @IsString()
  ddd: string;

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
