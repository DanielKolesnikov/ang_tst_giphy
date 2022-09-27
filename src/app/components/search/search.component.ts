import { Component, OnInit } from '@angular/core';
import { GiphyDataService } from '../../services/giphy/giphy-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private giphyDataService: GiphyDataService) { }

  ngOnInit(): void {
  }

  search(searchValue: string) {
    if (searchValue) {
      this.giphyDataService.updateSearchString(searchValue)
    }
  }

}
