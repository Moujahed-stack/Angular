import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  noUserFound: boolean = false;
  cachedData: any[] = []; 

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if (this.cachedData.length === 0) {
      this.fetchUsers();
    } else {
      this.users = this.cachedData;
      this.filteredUsers = this.users;
    }
  }

  fetchUsers(): void {
    this.http.get<any>('https://reqres.in/api/users?page=1').subscribe((response) => {
      this.users = response.data;
      this.filteredUsers = this.users;
      this.cachedData = this.users; 
    });
  }

  searchUserById(searchId: string): void {
    this.filteredUsers = this.users.filter((user) => user.id.toString().includes(searchId));
    this.noUserFound = this.filteredUsers.length === 0;
  }

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }
}
