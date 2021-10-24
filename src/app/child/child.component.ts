import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public recieveDataOfParent:any;
  @Output() public chidlEvent=new EventEmitter();
  counterChild=0;

  constructor() { }  
  ngOnInit(): void {
  }

  triggerParent(){
    this.counterChild=this.counterChild+1;
    this.chidlEvent.emit(this.counterChild);
  }
}
