import { Component, OnInit, Input } from '@angular/core'
import {MaterializeDirective } from "angular2-materialize"

import { ProteinDataService } from "../../services/protein.service"
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml } from '@angular/platform-browser'

declare const jQuery:any
declare const $:any

declare const pv:any

@Component({
  selector: 'app-structure-card',
  templateUrl: './structure-card.component.html',
  styleUrls: ['./structure-card.component.css']
})
export class StructureCardComponent implements OnInit {

  @Input() structure: any
  @Input() uniprot: any
  @Input() sitesActives: any
  public structureLink: string
  private viewer:any
  private pvStructure:any
  private dmolUrl: SafeResourceUrl
  public dmol: SafeHtml

  constructor(private proteinDataService:ProteinDataService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    $('.modal').modal()
  }

  getStructureName = (structure) => (structure.includes("_") ? structure.substring(0, structure.length - 2) : structure)

  getChain = (structure) => (structure.includes("_") ? structure.substring(structure.length - 1) : '')

  getListStringSitesActives = (sitesActives) => {
    let can = sitesActives.sitiosActCan.split(', ')
    let prot = sitesActives.sitiosActProm.split(', ')
    return Array.from(new Set(can.concat(prot))).join()
  }

  openReactionModal = () => {
    this.load3dmol()
    $('#modal-structure-' + this.structure.codigo).modal('open')
  }

  closeReactionModal = () => $('#modal-structure-' + this.structure.codigo).modal('close')

  load3dmol = () => {
    let can = this.sitesActives.sitiosActCan != '' ? `&select=resi:${this.sitesActives.sitiosActCan.replace(/\s/g, "")};chain:${this.getChain(this.structure.codigo)}&labelres=backgroundOpacity:0.8;backgroundColor:red;fontSize:14` : ''
    let prom = this.sitesActives.sitiosActProm != '' ? `&select=resi:${this.sitesActives.sitiosActProm.replace(/\s/g, "")};chain:${this.getChain(this.structure.codigo)}&labelres=backgroundOpacity:0.8;backgroundColor:blue;fontSize:16` : ''
    let url = `http://3Dmol.csb.pitt.edu/viewer.html?pdb=${this.getStructureName(this.structure.codigo)}&style=cartoon:color~spectrum${can}${prom}`
    let html = `<embed width="100%" height="600px" src="${url}" />`
    this.dmolUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
    this.dmol = this.sanitizer.bypassSecurityTrustHtml(html)
  }

  hasActiveSites = () => (this.sitesActives ? this.sitesActives.sitiosActCan.length > 0 || this.sitesActives.sitiosActProm.length > 0 : false)
}
