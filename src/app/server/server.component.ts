import {Component, OnInit} from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html'
  })
export class ServerComponent implements OnInit{

    ServerId: number=10;

    ServerStatus:String='offline';


    AllowNewServer=false;



constructor() {
  setTimeout(
    ()=>{
      this.AllowNewServer=true;
    }, 2000);
}

  ngOnInit(): void {
  }

}
