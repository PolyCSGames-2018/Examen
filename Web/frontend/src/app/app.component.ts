import { Component } from '@angular/core';
import { InfoService } from "../services/info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.scss']
})
export class AppComponent {

  public message = "";

  constructor(private infoService: InfoService) {
    this.infoService.getMessage()
      .subscribe(message => {
        this.message = message;
      })
  }
}
