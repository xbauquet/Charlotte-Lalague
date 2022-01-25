import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-service-card-alt',
  templateUrl: './service-card-alt.component.html',
  styleUrls: ['./service-card-alt.component.scss']
})
export class ServiceCardAltComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() imageAlt: string = '';
  @Output() click = new EventEmitter<void>();

  onClick() {
    if (this.click) {
      this.click.emit();
    }
  }
}
