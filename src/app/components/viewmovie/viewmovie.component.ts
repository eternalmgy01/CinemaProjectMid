import {Component, OnChanges, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';
import {LikesComponent} from '../likes/likes.component';


@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {
  @ViewChild(LikesComponent) viewchild: LikesComponent;
  private number: number;
  newname: string;
  newreview: string;
   reviews = [
    {name: 'Sultan', review: 'good movie'}
  ];
  constructor() { }

  ngOnInit(): void {
    this.number = 0;
    this.reviews = [];
    console.log('AppComponent:OnInit');
  }
  get counter(){
    return this.number;
  }
  set counter(value) {
    this.number = value;
  }

  increment() {
    if (this.counter === 0) {
      this.counter++;
    }
    else {
      this.counter--;
    }
  }

  addReview(newname, newreview){
    this.reviews.unshift({name: newname, review: newreview});
    return false;
  }
}
