import { Component, OnInit } from '@angular/core';
import { MessageService, Message } from '../../services/message.service';
import { NgForOf } from '@angular/common';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  providers: [MessageService],
  imports: [NgForOf, MessageComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  async ngOnInit() {
    await this.messageService.all();
    this.messages = this.messageService.messages;
  }
}
