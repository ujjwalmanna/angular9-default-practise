import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css'],
  styles:[`
    h3 {
      color: blue;
    }
    .online{
      color:white;
    }
  `]
})
export class ServersComponent implements OnInit {

  serverId:Number = 10;
  serverName:string="";
  isClicked:boolean=false;
  allowNewServer:boolean=false;
  serverStatus:string="not active";
  

  getServerStatus():string{
    return "running";
  }
  onupdate(event:Event):any{
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  getColor():any{
    return 'green';
  }
  clickMe():string{
    this.isClicked=true;
    this.serverStatus="active<=>"+this.serverName;;
    return this.serverStatus
  }
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

}
