import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GiphyDataService } from '../../services/giphy/giphy-data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  itemsOnPage: number = 9


  constructor(private giphyDataService: GiphyDataService) {}

  ngOnInit(): void {
  }

  ngOnIncreaseOffset() {
    this.giphyDataService.changeOffset(this.itemsOnPage)
  }

  ngOnDecreaseOffset() {
    this.giphyDataService.changeOffset(-this.itemsOnPage)
  }

}
