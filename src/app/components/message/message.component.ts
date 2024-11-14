import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for NgClass if needed

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MessageComponent {
  @Input({ required: true }) message: any;
  @Input() no: any;
}
