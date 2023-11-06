import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  isOpen: boolean = false;
  isUser: boolean = false;
  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isUser = (user) ? true : false;
      this.authService.userId = (user) ? user.uid : '';
    });
  }

  toggleNavBar() {
    this.isOpen = !this.isOpen;
  }

  /**
   * API to logout from website
   */
  logout() {
    this.authService.logout();
  }
}
