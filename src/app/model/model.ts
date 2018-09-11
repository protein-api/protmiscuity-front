
export class Protein {

    public id:number
    public codigoUniProt:string
    public nombre:string
    public secuencia:string
    public organismo:string
    public familia:string
    public codigoKegg:string
    public reacciones =[]
    public estructurasPDB =[]
    public dois =[]
    public sitiosActivo:any
    public notes:string
}

export interface IProtein {

    id:number
    codigoUniProt:string
    nombre:string
    secuencia:string
    organismo:string
    familia:string
    codigoKegg:string
    reacciones:any[]
    estructurasPDB:any[]
    dois:any[]
    sitiosActivo:any
    notes:string
  }

export class Enlace{
    public id:number;
    public nombre:string;
    public codigo:string;
    public link:string;
    public tipo:string;
}
