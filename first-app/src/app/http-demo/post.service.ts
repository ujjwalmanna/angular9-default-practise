import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-c7b57.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.messsage);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-c7b57.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'custom-headers': 'hello' }),
          params: searchParams
        }
      ).pipe(map((responsedata) => {
        const postArray: Post[] = [];
        // tslint:disable-next-line: forin
        for (const key in responsedata) {
          if (responsedata.hasOwnProperty(key)) {
            postArray.push({ ...responsedata[key], id: key });
          }
        }
        return postArray;
      }), catchError(errorRes => {
        return throwError(errorRes);
      }));
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-c7b57.firebaseio.com/posts.json',{
      observe: 'events'
    }).pipe(tap(event =>{
      console.log(event);
      if(event.type === HttpEventType.Sent){
        console.log('sent')
      }
      if(event.type === HttpEventType.Response){
        console.log('body=>'+ event.body)
      }
    }));
  }
}
