import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(notificationId: string): Promise<Notification | null>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}
