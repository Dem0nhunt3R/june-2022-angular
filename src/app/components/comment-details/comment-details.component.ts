import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()
  comment: IComment;

  length: number;

  fakeArray(length: number): number[] {
    let arr = [];

    for (let i = 1; i <= length; i++) {
      arr.push(i);

    }
    return arr;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({length, id}) => {
      this.length = length;
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];

      if (!this.comment) {
        this.commentService.getById(id).subscribe(value => this.comment = value);
      }
    });

  }

}
