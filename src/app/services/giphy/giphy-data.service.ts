import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GiphyDataInterface, GiphyObjectInterface } from 'src/app/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GiphyDataService {

  searchValue: string = 'funny';
  currentOffset = 1;
  gifsData: BehaviorSubject<GiphyDataInterface[]> = new BehaviorSubject<GiphyDataInterface[]>([])

  constructor(private http: HttpClient) {
    this.getGifs()
  }


  getGifs() {
    this.http.get<GiphyObjectInterface>(`${environment.giphyBaseUrl}?q=${this.searchValue}&api_key=${environment.giphyApiKey}&limit=9&offset=${this.currentOffset}`)
    .subscribe((data) => { this.gifsData.next(data.data); })
  }

  changeOffset(offset: number) {
    this.currentOffset += offset;
    if (this.currentOffset < 0) {
      this.currentOffset = 0;
    }
    this.getGifs()
  }

  updateSearchString(searchString: string) {
    this.searchValue = searchString;
    this.currentOffset = 0;
    this.getGifs();
  }

}
