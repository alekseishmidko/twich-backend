import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IS_DEV_ENV } from '../shared/utils/is-dev.util';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { getGraphQLConfig } from './config/graphql.config';
import { RedisModule } from './redis/redis.module';
import { AccountModule } from '../modules/auth/account/account.module';
import { VerificationModule } from '../modules/auth/verification/verification.module';
import { NotificationModule } from '../modules/notification/notification.module';
import { PasswordRecoveryModule } from '../modules/auth/password-recovery/password-recovery.module';
import { ProfileModule } from '../modules/auth/profile/profile.module';
import { SessionModule } from '../modules/auth/session/session.module';
import { CategoryModule } from '../modules/category/category.module';
import { ChannelModule } from '../modules/channel/channel.module';
import { ChatModule } from '../modules/chat/chat.module';
import { CronModule } from '../modules/cron/cron.module';
import { FollowModule } from '../modules/follow/follow.module';
import { LivekitModule } from '../modules/libs/livekit/livekit.module';
import { MailModule } from '../modules/libs/mail/mail.module';
import { StorageModule } from '../modules/libs/storage/storage.module';
import { StripeModule } from '../modules/libs/stripe/stripe.module';
import { TelegramModule } from '../modules/libs/telegram/telegram.module';
import { PlanModule } from '../modules/sponsorship/plan/plan.module';
import { SubscriptionModule } from '../modules/sponsorship/subscription/subscription.module';
import { TransactionModule } from '../modules/sponsorship/transaction/transaction.module';
import { IngressModule } from '../modules/stream/ingress/ingress.module';
import { StreamModule } from '../modules/stream/stream.module';
import { WebhookModule } from '../modules/webhook/webhook.module';

@Module({
  imports: [
    ConfigModule.forRoot({ ignoreEnvFile: !IS_DEV_ENV, isGlobal: true }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: getGraphQLConfig,
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    PrismaModule,
    RedisModule,
    MailModule,
    StorageModule,
    LivekitModule,
    TelegramModule,
    StripeModule,
    CronModule,
    AccountModule,
    SessionModule,
    ProfileModule,
    VerificationModule,
    PasswordRecoveryModule,
    TotpModule,
    DeactivateModule,
    StreamModule,
    IngressModule,
    WebhookModule,
    CategoryModule,
    ChatModule,
    FollowModule,
    ChannelModule,
    NotificationModule,
    PlanModule,
    TransactionModule,
    SubscriptionModule,
  ],
})
export class CoreModule {}
