import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';


@Module({
  imports: [PrismaModule, UserModule, TaskModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
