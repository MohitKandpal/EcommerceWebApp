import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  
  constructor(private authService: AuthService) { }
  
  errorMessage: string = "";
  ngOnInit(): void {
  }

  signup(f: any) {
    this.authService.signup(f.value.email, f.value.password).then(data => {
      console.log("Succesfull");
    }).catch(err => {
      this.errorMessage = err;
    });
  }

}
