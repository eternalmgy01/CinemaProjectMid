import {Component, ViewChild,  OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';
import {ShareService} from '../../services/share.service';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
  providers: [ShareService, LoggingService]
})
export class MaincontentComponent implements OnInit, OnDestroy{
  items;
  comments;
  @ViewChild(ComentsComponent) viewChild: ComentsComponent;
  message: string;
  // items: any[];
  // comments: any[];
  constructor(private shareService: ShareService, private loggingService: LoggingService) {
    this.items = shareService.getSharedItems();
    this.comments = shareService.getSharedComm();
    // this.loggingService.log(this.items);
  }
  a = false;
  Destroy(){
    this.a = true;
  }
  View(){
    this.a = false;

  }

  ngOnInit(): void {
    // this.items = ['Seven Deadly Sins', 'Constantine', 'Devils Advocate', 'Naruto', 'I Am Legend ', 'Tokyo Ghoul'];
    this.comments = [];
    console.log('AppComponent:OnInit');
  }
  addComment(comment){
    this.comments.unshift(comment);
    return false;
  }
  ngOnDestroy() {
  }

}
