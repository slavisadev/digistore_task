import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { MessageService } from '@/services/message.service';
import { Message } from '@/models/message.model';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-create-message',
  standalone: true,
  providers: [MessageService],
  imports: [ReactiveFormsModule, FormsModule, MessageComponent, NgIf, NgClass],
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss'],
})
export class CreateMessageComponent {
  message: Message = new Message('', 'draft');

  constructor(private messageService: MessageService) {}

  async onSubmit() {
    this.message.status = 'pending';
    const res = await fetch('http://127.0.0.1:4010/messages/send', {
      method: 'GET',
      body: JSON.stringify({ text: this.message.text }),
    });
    this.message.status = res.status === 204 ? 'sent' : 'failed';
    await this.messageService.add(this.message);
    this.message = new Message('', 'draft');
  }
}
