import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create-material',
  templateUrl: './post-create-material.component.html',
  styleUrls: ['./post-create-material.component.css']
})
export class PostCreateMaterialComponent implements OnInit {

  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
  }

  public onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postsService.addPost(form.value.title, form.value.content);

    form.resetForm();
  }
}
