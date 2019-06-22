import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Protein } from "../../model/model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProteinDataService } from "../../services/protein.service";

declare const jQuery:any;
declare const $:any;

@Component({
  selector: 'app-protein-full-view',
  templateUrl: './protein-full-view.component.html',
  styleUrls: ['./protein-full-view.component.css']
})

export class ProteinFullViewComponent implements OnInit {

  // public protein:Protein;
  private isEdit:boolean;
  private proteinId:string;
  private showDois:boolean = false;
  public structures:any[] = [];

  @Input() protein: any;

  constructor(private proteinDataService:ProteinDataService, private router:Router, private route:ActivatedRoute) {
    this.proteinId = this.route.snapshot.params['idProtein'];
    this.isEdit = this.proteinId ? true : false;
    this.protein = new Protein();

    this.proteinDataService.getSearchResultById()
      .subscribe( result => {
          this.protein = result;
          this.structures = this.getStructuresList();
        });
  }


  ngOnInit() {
    $('.collapsible').collapsible()
    this.getProtein();
  }

  getStructuresList = () => this.protein.estructurasPDB[0] ? this.protein.estructurasPDB[0].codigo.split(",") : []

  getProtein = () => { if(this.proteinId) this.proteinDataService.searchById(this.proteinId) }

  splitSequence = (sequence:string) => sequence ? sequence.split(" ") : []

  getEcs = () => {
    if(this.protein) {
      const ecs = this.protein.reacciones.map(r => r.ec);
      return ecs.filter(ec => ec !== 'Not assigned').join(', ');
    }
    return '';
  }

  hasKeggId = () => (this.protein.codigoKegg !== 'Not assigned')

  hasNotes = () => (this.protein.notes !== '')

  hasEc = () => (this.getEcs() !== '')

}

  //ocultamos los kegs si no hay
  //getKegg= (type) => (this.protein.codigoKegg.filter(proteina => protein.codigoKegg === type))
  //hasKegg = (type) => (this.getKegg(type).length > 0)
  //ocultamos los kegs si no hay
  //getKegg= (type) => (this.protein.codigoKegg.filter(proteina => protein.codigoKegg === type))
  //hasKegg = (type) => (this.getKegg(type).length > 0)
  //ocultamos las notas si no hay
  //getNote = (type) => (this.proteina.notes.filter(proteina => proteina.notes === type))
  //hasNote = (type) => (this.getNote(type).length > 0)
  // RAMA
  // para armar lista de ECS
  // getECList = () => this.protein.estructurasPDB[0] ? this.protein.estructurasPDB[0].codigo.split(",") : []
