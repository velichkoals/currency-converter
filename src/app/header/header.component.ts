import {Component, OnInit} from '@angular/core';
import {getLatestRate} from "../../helpers/getLatestRate";

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  currenciesToUah: string[] = []

  ngOnInit() {
    this.getRateToUah('USD').then();
    this.getRateToUah('EUR').then();
  }


  getRateToUah(base: string) {
    return getLatestRate(base, 'UAH').then(r => {
      this.currenciesToUah.push(r);
    })
  }
}
