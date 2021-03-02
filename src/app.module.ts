import { Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { CursoModule } from './modules/curso/curso.module';
import { ConfigModule } from './config/config.module';
import { RoleModule } from './modules/role/role.module';
import{TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './modules/auth/auth.module';
@Module({ 
  imports: [
     DatabaseModule, 
     UserModule, 
     CursoModule, 
     ConfigModule, 
     RoleModule,
     AuthModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService, private readonly connection: Connection){
    AppModule.port = this._configService.get(Configuration.PORT);
    
  }
}
