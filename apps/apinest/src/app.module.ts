import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('MONGO_URL'),
    TasksModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'taskfront/dist'),
    }),
  ],
})
export class AppModule {}
