import { Module } from '@nestjs/common';
import { UserModule } from './components/user/user.module';
import { AuthModule } from './components/auth/auth.module';
import { AquaculturePlaceModule } from './components/aquaculture-place/aquaculture-place.module';
import { TankModule } from './components/tank/tank.module';
import { DataTankModule } from './components/data-tank/data-tank.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory : () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    }),
    UserModule, AuthModule, AquaculturePlaceModule, TankModule, DataTankModule],
})
export class AppModule {}
