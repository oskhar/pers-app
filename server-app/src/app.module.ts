import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImageUploadProvider } from './config/multer/image/providers/image-upload.provider';
import { UserModule } from './modules/user/user.module';
import { ArticleModule } from './modules/article/article.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ArticleModule,
  ],
  controllers: [],
  providers: [ImageUploadProvider],
})
export class AppModule {}
