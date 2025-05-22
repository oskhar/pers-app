import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImageUploadProvider } from './config/multer/image/providers/image-upload.provider';
import { UserModule } from './modules/user/user.module';
import { ArticleModule } from './modules/article/article.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    ArticleModule,
  ],
  controllers: [],
  providers: [ImageUploadProvider],
})
export class AppModule {}
