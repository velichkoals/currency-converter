import {Component} from '@angular/core';

@Component({
  selector: 'app-converter',
  template: `
    <main class="converter">
        <app-converter-item [currency]="currencies[0]"></app-converter-item>
        <app-converter-item [currency]="currencies[1]"></app-converter-item>
        <app-converter-item [currency]="currencies[2]"></app-converter-item>
    </main>
  `,
  styleUrls: ['./converter.component.sass']
})
export class ConverterComponent {


  currencies: string[] = ['UAH', 'USD', 'EUR'];
}
