import {Injectable} from "@angular/core"

@Injectable()
export class SearchHelperService {

  private searchs = []

  constructor(){}

  getAll(){
    return this.searchs
  }

  pop() {
    return this.searchs.pop()
  }

  get() {
    return this.searchs.slice(-1).pop()
  }

  add(search) {
    this.searchs.push(search)
  }
}