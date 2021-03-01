import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { CursoModule } from './modules/curso/curso.module';
import { ConfigModule } from './config/config.module';
import { RoleModule } from './modules/role/role.module';
import{TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
@Module({ 
  imports: [
     DatabaseModule, 
     UserModule, 
     CursoModule, 
     ConfigModule, 
     RoleModule,
     TypeOrmModule.forRoot(
       {
          autoLoadEntities: true,      
      }
     )
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService, private readonly connection: Connection){
    AppModule.port = this._configService.get(Configuration.PORT);
    
  }
}
