import { Component, OnInit, ViewEncapsulation } from "@angular/core"
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from "@angular/router"
import { ProteinDataService } from "../../services/protein.service"
import { SearchHelperService } from "../../services/search.helper.service"

@Component({
    selector:'search-component',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit {

  constructor(private router:Router, private proteinDataService:ProteinDataService, private searchHelper:SearchHelperService) {
  }

  textSearch: string
  searchType:string = 'PROTEIN'

  ngOnInit() {
    const search = this.searchHelper.get()
    if(search && !search.fromHome) {
      this.textSearch = search.searchText
      this.searchType = search.searchType
      this.searchBy(this.searchType)
    }
  }

  selectChangeHandler(searchType:any) {
    this.searchType = searchType
  }

  getAllProteins = () => {
    this.searchHelper.pop()
    this.router.navigateByUrl('/proteins')
    this.proteinDataService.getAll()
    this.textSearch = null
  }

  search = () => {
    if(this.textSearch && this.searchType) {
      this.searchHelper.pop()
      this.searchHelper.add({searchType:this.searchType, searchText:this.textSearch, fromHome:false})
      this.router.navigateByUrl('/proteins')
      this.searchBy(this.searchType)
    }
  }

  searchBy(typeSearch) {
    if(typeSearch === 'PROTEIN') {
      //search by protein
      this.proteinDataService.searchByProtein(this.textSearch)
    } else if(typeSearch === 'REACTION') {
      //search by reaction
      this.proteinDataService.searchByReaction(this.textSearch)
    } else {
      //search by organism
      this.proteinDataService.searchByOrganism(this.textSearch)
    }
  }
  
}
