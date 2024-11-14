// src/app/services/message.service.ts
import { Injectable } from '@angular/core';

export class Message {
  text: string;
  status: string;

  constructor(message: string, status: string) {
    this.text = message;
    this.status = status;
  }

  empty() {
    return this.text === '';
  }
}

@Injectable({
  providedIn: 'root', // Makes it available app-wide
})
export class MessageService {
  messages: Message[] = [];

  async all() {
    const res = await fetch('http://127.0.0.1:4010/messages');
    const data = await res.json();

    this.messages = data.messages.map(
      (message: any) => new Message(message.text, message.status)
    );
  }

  async add(message: Message) {
    this.messages.push(message);
  }
}
