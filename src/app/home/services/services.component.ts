import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  isWeightPopupVisible = false;
  isHealthPopupVisible = false;
  isDiseasePopupVisible = false;
  isSportPopupVisible = false;
  isWorkshopPopupVisible = false;

  closePopups() {
    this.isWeightPopupVisible = false;
    this.isHealthPopupVisible = false;
    this.isDiseasePopupVisible = false;
    this.isSportPopupVisible = false;
    this.isWorkshopPopupVisible = false;
  }
}
