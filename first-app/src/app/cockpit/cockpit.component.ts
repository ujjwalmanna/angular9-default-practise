import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string,serverConent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverConent:string}>();
  @ViewChild('inputServerName') inputServer:ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(nameInput:HTMLInputElement) {
    console.log('input 2:'+this.inputServer.nativeElement.value)
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverConent:this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName:this.newServerName,
      serverConent:this.newServerContent
    })
  }

}
