export type MessageStatus = 'draft' | 'pending' | 'sent' | 'failed';

export interface IMessage {
  text: string;
  status: MessageStatus;
}

export class Message implements IMessage {
  constructor(public text: string, public status: MessageStatus) {}

  empty() {
    return this.text === '';
  }
}
