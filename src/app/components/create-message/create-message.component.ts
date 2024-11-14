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
  loading: boolean = false;
  error: string | null = null;

  constructor(private messageService: MessageService) {}

  onSubmit() {
    this.message.status = 'pending';
    this.loading = true;
    this.error = null;

    this.messageService.send(this.message).subscribe({
      next: () => {
        this.message.status = 'sent';
        this.messageService.add(this.message);
        this.message = new Message('', 'draft');
        this.loading = false;
      },
      error: (err) => {
        this.message.status = 'failed';
        this.error = 'Failed to send the message.';
        console.error('Error sending message:', err);
        this.loading = false;
      },
    });
  }
}
