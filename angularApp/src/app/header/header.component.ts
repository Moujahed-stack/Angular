import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() searchUser = new EventEmitter<string>();

  searchUserById(searchId: string): void {
    this.searchUser.emit(searchId);
  }

}
