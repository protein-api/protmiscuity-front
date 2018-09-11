import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProteinDataService } from "../../services/protein.service";
import { Subscription } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';
import { IProtein } from '../../model/model'

@Component({
    selector: 'protein-list',
    styleUrls: ['protein.list.component.scss'],
    templateUrl: 'protein.list.component.html',
})
export class ProteinListComponent implements OnInit{
    displayedColumns: string[] = ['nombre', 'codigoUniProt', 'organismo', 'familia'];
    //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    private searchText:string;
    public isEmptyList:boolean = false;
    public proteins:IProtein[] = [];
    private subscription: Subscription;
    showList:boolean = false
    @ViewChild(MatSort) sort: MatSort;
    dataSource = new MatTableDataSource(this.proteins);

    constructor(private route:ActivatedRoute, private proteinDataService:ProteinDataService, private router:Router, private changeDetector : ChangeDetectorRef){
      this.subscription = this.proteinDataService.getSearchResult()
      .subscribe(proteins => {
        this.proteins = proteins;
        this.dataSource = new MatTableDataSource(this.proteins);
        this.dataSource.sort = this.sort;
        this.isEmptyList = this.proteins.length < 1;
        this.changeDetector.detectChanges();
      });
    }

    ngOnInit(){
      this.dataSource.sort = this.sort;
    }

    getAllProteins = () => {
      this.proteinDataService.getAll();
      this.isEmptyList = false;
      this.changeDetector.detectChanges();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

    showProtein(id){
      this.router.navigateByUrl('/protein/'+ id);
    }

    splitString(name:string):string{
      let splitArray = name.split("/");
      return splitArray.length>0?splitArray[0]:""

    }

    getAmountReactions(model){
      return model.reacciones.length;
    }

    getAmountStructures(model){
      return model.estructurasPDB.length;
    }

    changeView(value) {
      this.showList = value
      this.dataSource.sort = this.sort;
    }

    onSelect(protein) {
      this.router.navigateByUrl('/protein/'+protein.id)
    }
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

export interface  Protein {
    id:number;
    nombre: string;
    codigoUniProt: string;
    organismo: string;
    familia: string;
}