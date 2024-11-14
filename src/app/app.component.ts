import { Component } from '@angular/core';
import { ChatComponent } from './components/chat/chat.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatComponent, CreateMessageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Chat';
}
