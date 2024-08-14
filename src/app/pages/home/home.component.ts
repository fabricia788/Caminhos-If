import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { CardComponent } from '../../component/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
