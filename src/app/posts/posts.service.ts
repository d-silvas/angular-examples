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
              }
            }
          )
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

  addPost(title: string, content: string) {
    const post: Post = { id: null, title, content };
    this.http.post<{ message: string }>(this.postsBaseUrl, post)
      .subscribe((response) => {
        console.log(response.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
