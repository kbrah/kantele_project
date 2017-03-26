import { Component } from '@angular/core';
import CompositionService from '../services/composition-service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: [CompositionService]
})
export class HomeComponent {
  public compositions;

  constructor(private service: CompositionService) {
    this.service.getCompositions().subscribe(data => this.compositions = data);
    console.log(this.service.getCompositions())
  }
}
