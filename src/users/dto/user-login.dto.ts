import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Неверно указон Email' })
	email: string;

	@IsString({ message: 'Неверно указон пароль' })
	password: string;
}
