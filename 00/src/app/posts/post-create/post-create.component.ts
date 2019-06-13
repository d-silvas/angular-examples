import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = 'NO CONTENT';
  newPostTwoWay = 'I SAID NO CONTENT';

  constructor() { }

  ngOnInit() {
  }

  public onAddPostWithHTMLElRef(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value;
  }


}
