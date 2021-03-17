import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  items;
  newsitems;
  comments;
  constructor(private loggingService: LoggingService) {
    this.items = ['Seven Deadly Sins', 'Constantine', 'Devils Advocate', 'Naruto', 'I Am Legend ', 'Tokyo Ghoul'];
    this.newsitems = ['The head of the Marvel studio commented on the rumor about the return of Captain America', 'Ridley Scott will show WWII from the point of view of the Russians', '\n' +
    'Gore Verbinski: "I don\'t have a director\'s cut of Pirates of the Caribbean"'];
    this.comments = [];
  }
  // tslint:disable-next-line:typedef
  public getSharedItems() {
    this.loggingService.log(this.items);
    return this.items;
}
  public getSharedNews(){
    this.loggingService.log(this.newsitems);
    return this.newsitems;
  }
  public  getSharedComm(){
    this.loggingService.log(this.comments);
    return this.comments;
  }
}
