export class Message {
	
	content: string;
	image:string;
	timestamp: Date;


	constructor(content: string, image:string, timestamp: Date){

	this.content=content;
	this.image=image;
	this.timestamp=timestamp;

	}
}