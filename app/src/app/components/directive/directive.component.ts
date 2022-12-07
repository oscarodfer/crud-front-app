import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  allLanguages: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  isListVisible: boolean = true;

  // Toggles the list's ngIf visibility on and off
  changeListVisibility(): void {
    this.isListVisible = !this.isListVisible;
  }

  constructor() { }
}
