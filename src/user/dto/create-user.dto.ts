import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        description: 'O nome de usuário do usuário',
        minLength: 5,
        maxLength: 100,
        example: 'john_doe',
    })
    @IsString()
    @Length(5, 100)
    name: string;

    @ApiProperty({
        description: 'Email do usuário',
        minLength: 5,
        maximum: 20,
        example: 'john.doe@mail.com'
    })
    @IsString()
    email: string;

    @ApiProperty({
        description: 'DD do usuário',
        minLength: 2,
        maxLength: 3,
        example: "081"
    })
    @IsString()
    ddd: string;

    @ApiProperty({
        description: '',
        minLength: 9,
        maxLength: 11,
        example: "992546871"
    })
    @IsString()
    phone: string;

    @ApiProperty({
        description: 'A senha do usuário',
        minLength: 8,
        example: 'password123',
    })
    @IsString()
    password: string;
}
