import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService} from './chat-dialog/chat.service';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [ChatDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
     HttpModule
  ],
  exports: [ChatDialogComponent ],
  providers: [ChatService]
})
export class ChatModule { }
