import { Notification as RawNotification } from "@prisma/client";
import { Notification } from "@app/entities/notification";
export declare class PrismaNotificationHelper {
    static toPrisma(notification: Notification): {
        id: string;
        content: string;
        category: string;
        recipientId: string;
        readAt: Date | null | undefined;
        createdAt: Date;
    };
    static toDomain(raw: RawNotification): Notification;
}
