import { Component, OnInit } from '@angular/core';
import { SearchHelperService } from "../../services/search.helper.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private searchHelper:SearchHelperService) {}

  ngOnInit() {
    this.searchHelper.pop()
  }
}
