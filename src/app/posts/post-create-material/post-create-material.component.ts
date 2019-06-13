import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create-material',
  templateUrl: './post-create-material.component.html',
  styleUrls: ['./post-create-material.component.css']
})
export class PostCreateMaterialComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}
