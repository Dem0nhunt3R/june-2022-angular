import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: IUser;

  length: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  fakeArr(num: number): number[] {
    let arr = [];

    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }

    return arr;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({length, id}) => {
      this.length = length;
      this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];

      if (!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value);
      }
    })
  }

}
