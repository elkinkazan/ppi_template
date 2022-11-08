import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ppi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  // subscription period
  @Input() subPeriod?: string = '1 месяц';
  // subscription title
  @Input() subTitle?: string = 'Для тех, кто пробует';
  // subscription cost
  @Input() subCost?: number = 299;
  // subscription advertisement
  @Input() subAds?: string = 'Начать 7 дней бесплатно';
  // subscription additional info
  @Input() subAddInfo?: string = 'Ежемесячная оплата';
  // background color
  @Input() lightYellow?: boolean = true;
  @Input() reverse?: boolean = false;
  // show percentage
  @Input() percent?: number;
  // window size
  public innerWidth: number = 1800;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth)
  }

  onSubClick() {}

  onArrowClick() {}
}
