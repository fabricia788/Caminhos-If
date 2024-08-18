import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CardComponent } from '../../card/card.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
