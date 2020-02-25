import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.accounts=this.accountService.accounts;
  }
  serverElements = [{type:'server',name:'test',content:'data description'}];
  accounts:{name:string,status:string}[]=[]
  constructor(private accountService:AccountService){
    
  }
  

  onServerAdded(serverData:{serverName:string,serverConent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverConent
    });
  }

  onBlueprintAdded(serverData:{serverName:string,serverConent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverConent
    });
  }
  removeFirstElement(){
    this.serverElements.splice(0,1);
  }
  
  changeFirstElement(){
    this.serverElements[0].name="changed";
  }
  
}
