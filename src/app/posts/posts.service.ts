import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  readonly postsBaseUrl = environment.baseUrl + 'posts';

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    this.http
      // We say posts is type "any" because it comes from the backend with "_id"
      // instead of "id" (which our model specifies). We use "map" to fix this
      .get<{message: string, posts: any}>(this.postsBaseUrl)
      .pipe(
        map((postData) => {
          return postData.posts.map(
            post => {
              return {
                title: post.title,
                content: post.content,
                id: post._id
              };
            }
          );
        })
      )
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return {...this.posts.find(p => p.id === id)};
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title, content };
    this.http.post<{ message: string, postId: string }>(this.postsBaseUrl, post)
      .subscribe((responseData) => {
        const newPostId = responseData.postId;
        post.id = newPostId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  updatePost(id: string, title: string, content: string) {
    const post: Post = {id, title, content};
    this.http.put(`${this.postsBaseUrl}/${id}`, post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(postId: string) {
    this.http.delete(`${this.postsBaseUrl}/${postId}`)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }
}
