import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div style="background-color: #fff;">
      <span class="bg-slate-400" class="block bg-slate-200 text-slate-500">
        #{{ no }} - {{ message.status }}
      </span>
      <div
        class="p-2"
        [ngClass]="{ 'text-slate-500': message.status === 'draft' }"
      >
        {{ message.text }}
      </div>
    </div>
  `,
  standalone: true,
  imports: [],
})
export class MessageComponent {
  @Input({ required: true }) message: any;
  @Input() no: any;
}
