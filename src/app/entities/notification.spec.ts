import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('shoud be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'teste',
            recipientId: '12131313131313'
        })

        expect(notification).toBeTruthy();
    })
})