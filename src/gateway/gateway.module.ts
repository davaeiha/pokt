import { Module } from '@nestjs/common'
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request'
import { ConfigService } from '@nestjs/config'
import { GatewayConfig } from '../common/config/config.interface'

@Module({
  imports: [
    GraphQLRequestModule.forRootAsync(GraphQLRequestModule, {
      useFactory: (configService: ConfigService) => {
        return {
          endpoint: configService.get<GatewayConfig>('gateway')!.endpoint,
          options: {
            headers: {
              'content-type': 'application/json',
            },
          },
        }
      },
      inject: [ConfigService],
    }),
  ],
})
export class GatewayModule {}
