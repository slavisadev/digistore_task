import { Component, OnInit } from '@angular/core';
import { MessageService } from '@/services/message.service';
import { Message } from '@/models/message.model';
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
  loading: boolean = true;
  error: string | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.all().subscribe({
      next: (messages) => {
        this.messages = messages;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load messages. Please try again later.';
        this.loading = false;
        console.error('Error fetching messages:', err);
      },
    });
  }
}
