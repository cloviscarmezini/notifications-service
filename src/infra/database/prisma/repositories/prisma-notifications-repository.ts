import { Injectable } from "@nestjs/common";
import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationHelper } from "@app/mappers/prisma-notification-helper";

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
    constructor(private prisma: PrismaService) {}

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationId
            }
        })

        if(!notification) {
            return null;
        }

        return PrismaNotificationHelper.toDomain(notification);
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notification.count({
            where: {
                recipientId
            }
        })

        return count;
    }
    
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prisma.notification.findMany({
            where: {
                recipientId
            }
        })

        return notifications.map(PrismaNotificationHelper.toDomain);
    }

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationHelper.toPrisma(notification);

        await this.prisma.notification.create({
            data: raw
        })
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationHelper.toPrisma(notification);

        await this.prisma.notification.update({
            where: {
                id: raw.id
            },
            data: raw
        })
    }
}