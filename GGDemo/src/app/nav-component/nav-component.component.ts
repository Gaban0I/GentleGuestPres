import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-component.component.html',
  styleUrl: './nav-component.component.css',
})
export class NavComponentComponent {}
