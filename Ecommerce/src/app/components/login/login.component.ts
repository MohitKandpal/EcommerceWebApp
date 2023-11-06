import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }

  /**
   * API to login the user to website
   * @param f : Form instance
   */
  login(f: any) {
    this.authService.login(f.value.email, f.value.password).then(data => {
      this.router.navigate(["/"]);
    }).catch(err => {
      console.log(err);
    });
  }

}
