import { Module } from '@nestjs/common';
import { AquaculturePlaceController } from './aquaculture-place.controller';
import { AquaculturePlaceService } from './aquaculture-place.service';


@Module({
  controllers: [AquaculturePlaceController],
  providers: [AquaculturePlaceService]
})
export class AquaculturePlaceModule {}
