"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const in_memory_notifications_repository_1 = require("../../../test/repositories/in-memory-notifications-repository");
const send_notification_1 = require("./send-notification");
describe('Send notification', () => {
    it('shoud be able to send a notification', async () => {
        const notificationsRepository = new in_memory_notifications_repository_1.InMemoryNotificationsRepository();
        const sendNotification = new send_notification_1.SendNotification(notificationsRepository);
        const { notification } = await sendNotification.execute({
            category: 'social',
            content: 'This is a notification',
            recipientId: '1231311212'
        });
        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    });
});
//# sourceMappingURL=send-notificartion.spec%20copy.js.map