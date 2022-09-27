import { Component, OnInit } from '@angular/core';
import { GiphyDataInterface } from 'src/app/interface';
import { GiphyDataService } from '../../services/giphy/giphy-data.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  gifs: GiphyDataInterface[] = [];

  constructor(private giphyDataService: GiphyDataService) {
    this.giphyDataService.gifsData.subscribe((data) => {
      this.gifs = data;
    })
  }

  ngOnInit(): void {
  }

}
