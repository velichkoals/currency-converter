import {Component, Input } from '@angular/core';
import {getConvertedCurrency} from "../../helpers/getConvertedCurrency";

@Component({
  selector: 'app-converter-item',
  templateUrl: './converter-item.component.html',
  styleUrls: ['./converter-item.component.sass', '../converter/converter.component.sass']
})
export class ConverterItemComponent {
  inputValue = ''
  selectValue = ''
  result = ''

  @Input()
  currency: string | undefined

  inputHandler(event: any) {
    this.inputValue = event.target.value
    this.checkChanges()
  }

  selectHandler(event: any) {
    this.selectValue = event.target.value
    this.checkChanges()
  }

  checkChanges() {
    if (this.inputValue !== '' && this.selectValue !== '') {
      getConvertedCurrency(this.currency, this.selectValue, this.inputValue).then(r => {
        this.result = `${r} ${this.selectValue}`
      })
    }
    if (this.inputValue === '' || this.selectValue === '') {
      this.result = ''
    }
  }
}
