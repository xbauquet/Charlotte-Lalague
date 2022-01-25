import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string= '';
  @Input() imageAlt: string = '';
  @Input() orientation: 'right' | 'left' = 'right';
}
