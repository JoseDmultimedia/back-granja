import { Module } from '@nestjs/common';
import { DataTankController } from './data-tank.controller';
import { DataTankService } from './data-tank.service';

@Module({
  controllers: [DataTankController],
  providers: [DataTankService]
})
export class DataTankModule {}
