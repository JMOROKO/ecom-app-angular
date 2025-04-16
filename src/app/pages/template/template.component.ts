import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

}
