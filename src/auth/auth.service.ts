import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse } from './auth-response';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtExpiresIn: number;

  constructor(
    // private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpiresIn = +this.configService.get('JWT_EXPIRATION_TIME');
  }

  signIn(username: string, password: string): AuthResponse {
    if (username !== 'test' || password !== 'test') {
      throw new UnauthorizedException();
    }

    const payload = { sub: 'test', username };
    const token = this.jwtService.sign(payload);

    return {
      token,
      expiresIn: this.jwtExpiresIn,
    };
  }
}
