import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  @Input()
  length: number

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getDetails(): void {
    this.router.navigate([this.length + '/' + this.user.id], {
      relativeTo: this.activatedRoute,
      state: {user: this.user}
    })
  }
}
