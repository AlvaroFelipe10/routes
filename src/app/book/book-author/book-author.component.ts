import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent implements OnInit {

  authors$!: Observable<string[]>
  constructor(
    private route: ActivatedRoute){

  }

  ngOnInit() {
    // console.log('BookAuthorsComponent');
    this.authors$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => (params.get('authors')!.split(','))))
  }

}
function params(value: ParamMap): void {
  throw new Error('Function not implemented.');
}

