import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }



}
