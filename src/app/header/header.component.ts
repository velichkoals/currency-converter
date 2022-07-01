import {Component, OnInit} from '@angular/core';
import {getLatestRate} from "../../helpers/getLatestRate";

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  usdToUah = ''
  eurToUah = ''

  ngOnInit() {
    getLatestRate('USD', 'UAH').then(r => {
      this.usdToUah = r;
    })
    getLatestRate('EUR', 'UAH').then(r => {
      this.eurToUah = r;
    })
  }
}
