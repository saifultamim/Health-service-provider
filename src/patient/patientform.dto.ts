import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class PatientForm {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 8)
  password: string;

  address: string;
  filename: string;
}
