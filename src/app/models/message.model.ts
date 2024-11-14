export interface IMessage {
  text: string;
  status: string;
}

export class Message implements IMessage {
  constructor(public text: string, public status: string) {}

  empty() {
    return this.text === '';
  }
}
