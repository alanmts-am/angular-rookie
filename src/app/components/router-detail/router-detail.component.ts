import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-detail',
  templateUrl: './router-detail.component.html',
  styleUrl: './router-detail.component.scss'
})
export class RouterDetailComponent implements OnInit {

  id!: string;


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']
      }
    )
  }

}
