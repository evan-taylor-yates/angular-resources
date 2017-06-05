import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // now the server-element css stylesheet is applied globally
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // '@Input' allows a parent component to bind to the 'element' propertyin the Html file:
  // <server-element [element]=something...><server-element>

  // If you dont want to rename, just do this:
  //  @Input() element: { ...
  @Input('renamedElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngOnInit called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentInit called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}

