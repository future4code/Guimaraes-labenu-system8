
import { User } from "./User";


export class Docente extends User{
    private especialidades :string[]

    constructor(name:string,email:string,dataNasc:Date,turmaId:string,especialidades:string[]){
        super(name,email,dataNasc,turmaId)
        this.especialidades=especialidades

    }
    public getEspecialidades=():string[] => {
        
         return  this.especialidades
    }

}
