import { Injectable } from '@angular/core';
import { IMessage, Message } from '@/models/message.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messagesApiUrl = `${environment.API_URL}/messages`;
  messages: Message[] = [];

  constructor(private http: HttpClient) {}

  all(): Observable<Message[]> {
    return this.http.get<{ messages: IMessage[] }>(this.messagesApiUrl).pipe(
      map((response) =>
        response.messages.map((msg) => new Message(msg.text, msg.status))
      ),
      catchError((error) => {
        console.error('Failed to fetch messages:', error);
        throw error;
      })
    );
  }

  /**
   * Usually, I would make an HTTP POST request here to send it to the server
   */
  add(message: Message): void {
    this.messages.push(message);
  }
}
