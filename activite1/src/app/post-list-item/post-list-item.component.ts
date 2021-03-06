import { Component, Input, OnInit } from '@angular/core';
import { Post } from './../model/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post?: Post;
  constructor() { }
  ngOnInit(): void {
  }

  like() {
    if (this.post != null)
        this.post.loveIts +=1; 
  }
  dislike() {
    if (this.post != null)
      this.post.loveIts--;
  }
}
