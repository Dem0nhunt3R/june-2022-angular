import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input()
  post: IPost;

  length: number;

  fakeArray(length: number): number[] {
    let arr = [];

    for (let i = 1; i <= length; i++) {
      arr.push(i);
    }

    return arr;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({length, id}) => {
      this.length = length;
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post'];

      if (!this.post) {
        this.postService.getById(id).subscribe(value => this.post = value);
      }
    })
  }

}
