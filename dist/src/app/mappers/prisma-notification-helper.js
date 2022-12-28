"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationHelper = void 0;
const notification_1 = require("../entities/notification");
const content_1 = require("../entities/content");
class PrismaNotificationHelper {
    static toPrisma(notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        };
    }
    static toDomain(raw) {
        return new notification_1.Notification({
            category: raw.category,
            content: new content_1.Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt
        }, raw.id);
    }
}
exports.PrismaNotificationHelper = PrismaNotificationHelper;
//# sourceMappingURL=prisma-notification-helper.js.map