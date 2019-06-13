import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create-material',
  templateUrl: './post-create-material.component.html',
  styleUrls: ['./post-create-material.component.css']
})
export class PostCreateMaterialComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  public onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
