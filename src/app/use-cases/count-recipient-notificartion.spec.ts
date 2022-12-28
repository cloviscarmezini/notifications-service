import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notification";
import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipients notifications', () => {
    it('shoud be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(
            makeNotification({
                recipientId: 'recipient-1'
            })
        );

        await notificationsRepository.create(
            makeNotification({
                recipientId: 'recipient-1'
            })
        );

        await notificationsRepository.create(
            makeNotification({
                recipientId: 'recipient-2'
            })
        );

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);
    });
})