import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from 'src/decorators/macth.decorator';
import { RoleEnum } from 'src/enums/role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 32)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 64)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(128)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @Match('password', { message: "Passwords don't matches." })
  confirmPassword: string;

  @IsEnum(RoleEnum)
  @IsOptional()
  role: RoleEnum;
}
