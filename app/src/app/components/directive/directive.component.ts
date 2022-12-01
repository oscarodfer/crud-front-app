import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  allLanguages: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  
  constructor() {}
}
