import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";
export declare class InMemoryNotificationsRepository implements NotificationsRepository {
    notifications: Notification[];
    create(notification: Notification): Promise<void>;
}
