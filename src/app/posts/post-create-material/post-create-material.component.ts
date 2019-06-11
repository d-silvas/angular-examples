import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create-material',
  templateUrl: './post-create-material.component.html',
  styleUrls: ['./post-create-material.component.css']
})
export class PostCreateMaterialComponent implements OnInit {
  newPost = 'NO CONTENT';
  enteredValue = '';

  constructor() { }

  ngOnInit() {
  }

  public onAddPost() {
    this.newPost = this.enteredValue;
  }
}
