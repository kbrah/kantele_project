import { Component, OnInit } from '@angular/core';
import CompositionService from '../../services/composition-service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [CompositionService]
})
export class SearchResultsComponent {


  public searchResults;
  constructor(private service: CompositionService) {
    this.service.getCompositions().subscribe(data => this.searchResults = data);
  }

}
