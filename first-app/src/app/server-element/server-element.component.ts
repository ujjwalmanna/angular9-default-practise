import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy {

  @ViewChild('header',{static:true}) header:ElementRef; 
  @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
    console.log('text content in view init:'+this.header.nativeElement.textContent)
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked called')
    console.log('text content of paragraph in conentent checked:'+this.paragraph.nativeElement.textContent)

  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit called')
    console.log('text content of paragraph in conentent init:'+this.paragraph.nativeElement.textContent)

  }
  ngDoCheck(): void {
    console.log('do check called')
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
   console.log('ngonchanges called');
   console.log(changes)
  }
  @Input() element:{type:string,name:string,content:string};
  @Input()name:String;
  constructor() { }

  
  ngOnInit(): void {
    console.log('servier ng oninit called')
    console.log('text content in init:'+this.header.nativeElement.textContent)
    console.log('text content of paragraph in init:'+this.paragraph.nativeElement.textContent)
  }

}
