import { Component, OnInit } from '@angular/core';

//Service
import { UserService } from "../../services/user.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public authService: UserService) { }

  ngOnInit(): void {
  }

}
