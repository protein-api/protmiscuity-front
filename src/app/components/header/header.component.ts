import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"
import { SearchHelperService } from "../../services/search.helper.service"

declare const $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private searchHelper:SearchHelperService) { }

  ngOnInit() {
    this.initMaterializeCssComponents()
  }

  initMaterializeCssComponents() {
    $('.button-collapse').sideNav()
    $(".dropdown-button").dropdown()
  }

  goToProteins() {
    this.searchHelper.pop()
    this.router.navigateByUrl('/proteins')
  }

}
