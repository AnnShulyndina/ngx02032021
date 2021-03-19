import {
  Component, Input, OnInit, Output, EventEmitter, SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input()
  public title!: string;

  @Output()
  public toggle: EventEmitter<boolean> = new EventEmitter();
  public isOpen = false;

  constructor() {
    // console.log('title ==>', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('title ==>', this.title);
    setTimeout(() => {
      this.title = 'New title';
    }, 5000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }


  public toggleSideNav(): void {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }

}
