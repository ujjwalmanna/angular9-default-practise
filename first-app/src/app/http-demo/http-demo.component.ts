import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  subscription: Subscription;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.subscription = this.postService.error.subscribe(errorMEssage=>{
      this.error = errorMEssage;
    })
    this.isFetching = true;
    this.postService.fetchPosts().subscribe((post => {
      this.isFetching = false;
      this.loadedPosts = post;
    }), error => {
      this.error = error.message;

    });
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(post => {
      this.isFetching = false;
      this.loadedPosts = post;
    }, error => {
      this.isFetching = false;
      this.error = error.message;

    });
  }


  onClearPosts() {
    this.isFetching = true;
    this.postService.deletePosts().subscribe((post => {
      this.isFetching = false;
      this.loadedPosts = [];
    }));
  }

  onHandleError(){
    this.error = null;
  }
}

