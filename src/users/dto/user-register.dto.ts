import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Неверно указон Email' })
	email: string;

	@IsString({ message: 'Неверно указон пароль' })
	password: string;

	@IsString({ message: 'Неверно указоно имя' })
	name: string;
}
