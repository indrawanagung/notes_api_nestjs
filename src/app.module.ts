import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotesController } from './notes/notes.controller';
import { SecurityMiddleware } from './middleware/security.middleware';

@Global()
@Module({
  imports: [NotesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SecurityMiddleware)
    .forRoutes(NotesController)
  }
}
