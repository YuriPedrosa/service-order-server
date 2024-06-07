import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthResponse } from './auth-response';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  @HttpCode(200)
  signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ): AuthResponse {
    return this.authService.signIn(username, password);
  }
}
