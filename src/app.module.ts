import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [SongsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
