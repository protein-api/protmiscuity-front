import { Component, OnInit } from '@angular/core'
import { ProteinDataService } from "../../services/protein.service"
import { Protein } from '../../model/model';

@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.css']
})
export class StructureListComponent implements OnInit {

  protein: Protein
  structures: any
  currentPage: number = 1

  constructor(private proteinDataService:ProteinDataService) {
    this.proteinDataService.getSearchResultById().subscribe( result => {
      this.structures = result.estructurasPDB
      this.protein = result
    })
  }

  ngOnInit() {
    
  }

}
