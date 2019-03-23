import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})



export class ChatService {
	
	url="https://api.dialogflow.com/v1/query";
	accessToken="3c6413f5e295476b9e219e7a3431c440";
	
  	constructor(private http: Http) { }

  	public sendMessage(message: string){

  		let data ={
  			lang: "en",
  			query: message
  		}

  		let headers = new Headers();
  		headers.append("Authorization","Bearer " + this.accessToken);
  		return this.http.post(this.url, data, {headers: headers}).map(res => {
  			res.json()
  		})
  	}

}
