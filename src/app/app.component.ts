import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'ngx020321';


  public toggleSideNav(event: boolean): void {
    console.log(event);
  }


  public searchTerm = '';

  public onSearch(value: string): void {
   console.log(value);
  }

  public logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  public logoWidth = 10;

  public clickOnImage(_: string, event: MouseEvent): void {
    console.log(event);
  }

  public user: {
    name: string;
    info?: unknown;
  } = {
    name: 'Igor'
  };

  public span = this.domSanitizer.bypassSecurityTrustHtml('<span style="color: red">Tooltip</span>');

  constructor(
    private domSanitizer: DomSanitizer
  ) {
  }


  private salary = 3000;
  private bonuses = 1.2;

  public getSalary(): number {
    return Math.round(this.salary * this.bonuses);
  }


}
