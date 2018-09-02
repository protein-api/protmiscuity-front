import {Component, Input, OnInit} from '@angular/core'
import { ProteinDataService } from "../../services/protein.service"
import { Protein } from "../../model/model"

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})

export class LinksComponent implements OnInit {

  public links:any

  constructor(private proteinDataService:ProteinDataService) {
    this.proteinDataService.getSearchResultById().subscribe( result => this.links = result.dois )
  }

  ngOnInit() {}

  getLinks = (type) => (this.links.filter(link => link.tipo.toLowerCase() === type.toLowerCase()))
  getAmountLinks = (type) => this.links ? this.getLinks(type).length : 0
  hasLinks = (type) => (this.getAmountLinks(type) > 0)

}
