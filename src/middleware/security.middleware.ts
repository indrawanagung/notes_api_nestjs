import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SecurityMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers['x-api-key'] != "nest123") {
      throw new UnauthorizedException('invalid x-api-key')
    }
    next();
  }
}
