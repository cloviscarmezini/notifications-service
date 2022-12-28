import { SendNotification } from "@app/use-cases/send-notification";
interface SendNotificationPayload {
    content: string;
    category: string;
    recipientId: string;
}
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    handleSendNotification({ content, category, recipientId }: SendNotificationPayload): Promise<void>;
}
export {};
