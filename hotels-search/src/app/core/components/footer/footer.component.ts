import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @HostBinding('className') componentClass: string;
  constructor() {
    this.componentClass = 'mt-auto';
  }
  ngOnInit(): void {
  }

}
