import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: any[] = [];
  @Input() filteredUsers: any[] = [];
  @Output() navigateToUserDetails = new EventEmitter<number>();

  searchUserById(searchId: string): void {
    this.filteredUsers = this.users.filter(user => user.id.toString().includes(searchId));
  }
}
