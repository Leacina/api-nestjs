import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://giovane:<xadrezgrande123>@curso-0xmun.azure.mongodb.net/<curso>?retryWrites=true&w=majority'),
    BackofficeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
