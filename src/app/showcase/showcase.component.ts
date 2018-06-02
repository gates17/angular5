import { Component, OnInit } from '@angular/core';
import { ShowcaseService} from '../services/showcase.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
  providers: [ShowcaseService]
})
export class ShowcaseComponent implements OnInit {

  public showcaseProducts = [];

  constructor(private _showcaseService: ShowcaseService) { }

  ngOnInit() {
    this._showcaseService.getShowcaseProducts()
    .subscribe(data => this.showcaseProducts = data);
  }

}

