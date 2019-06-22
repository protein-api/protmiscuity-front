import { Component, OnInit, Input } from '@angular/core';

declare const jQuery:any;
declare const $:any;

@Component({
  selector: 'app-reaction-card',
  templateUrl: './reaction-card.component.html',
  styleUrls: ['./reaction-card.component.css']
})
export class ReactionCardComponent implements OnInit {

  @Input() reaction: any

  constructor() { }

  ngOnInit() {
    $('.modal').modal()
  }

  getMolecules = (type) => (this.reaction.cineticas.filter(cinetica => cinetica.tipo === type))
  getNotes = (type) => (this.reaction.cineticas.filter(reaccion => reaccion.notes === type))

  hasMolecules = (type) => (this.getMolecules(type).length > 0)
  hasNotes = (type) => (this.getNotes(type).length > 0)
  hasEcs = () => (this.reaction.ec !== 'Not assigned')

  amountOfMolecules = (type) => this.getMolecules(type).length

  openReactionModal = () => {
    $('#modal-reaction-' + this.reaction.id).modal('open')
  }

  closeReactionModal = () => {
    $('#modal-reaction-' + this.reaction.id).modal('close')
  }

  cineticType = (type) => (type === "REACTIVO" ? "Reactive" : "Product")

  getNameOnlyLetters = () => this.reaction.descripcion.replace(/[^a-zA-Z]+/g, '')

  getNames = (name) => this.reaction.descripcion.split(',')
}
