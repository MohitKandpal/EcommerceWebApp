import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }
  
  errorMessage: string = "";
  ngOnInit(): void {
  }

  /**
   * API to signup a user
   * @param f : Form Instance
   */
  signup(f: any) {
    this.authService.signup(f.value.email, f.value.password).then(data => {
      if(data != null && data.user != null) {
        this.userService.addNewUser(data.user.uid, f.value.name, f.value.address);
        this.errorMessage = "";
        this.router.navigate(["/"]);
      }
    }).catch(err => {
      this.errorMessage = err;
    });
  }

}
