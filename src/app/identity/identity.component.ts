import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {
  @Input() id: string;
  constructor() {
    // Định nghĩa giá trị mặc định cho kiểu string
    this.id = '';
  }

  ngOnInit(): void {
  }

}
