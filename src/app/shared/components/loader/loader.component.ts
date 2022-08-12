import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: [`
    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
     `]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
