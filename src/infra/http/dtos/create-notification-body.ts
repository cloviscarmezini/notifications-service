import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
    @IsNotEmpty({
        message: 'The recipientId is required'
    })
    @IsUUID()
    recipientId: string;

    @IsNotEmpty({
        message: 'The content is required'
    })
    @Length(5, 240)
    content: string;
    category: string;
}