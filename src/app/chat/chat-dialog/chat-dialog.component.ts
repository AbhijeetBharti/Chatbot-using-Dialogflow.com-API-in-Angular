import { Component, OnInit, Input,AfterViewChecked, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {Message} from './message.model';
import { ChatService} from './chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit{

	messages:Message[] =[];

	

  constructor(private chatService: ChatService, public dialogRef: MatDialogRef<ChatDialogComponent>) { }

  ngOnInit() { 
        
    }

   

 
 
  sendMessage (message_content){
  	let message = new Message(message_content.value, "assets/user.png", new Date());
  	this.messages.push(message);
  	
  
  this.chatService.sendMessage(message_content.value).subscribe( res => {
  		let message = new Message(res.result.speech,"assets/bot.png", new Date());
  		this.messages.push(message);
  	
  		
  		message_content.value =""
  }, err => {

  		console.log(err)
  });

  }

  close(){

  	this.dialogRef.close();

  }
 
}
