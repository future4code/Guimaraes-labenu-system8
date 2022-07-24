export class Turmas {
    
    private id: string
    private nome: string
    private modulo: string

    constructor(id: string, nome: string, modulo:string){
        this.id = id,
        this.nome = nome,
        this.modulo = modulo
    }

    public getId = () : string => {
        return this.id
    }
    public getNome = () : string => {
        return this.nome
    }
    public getModulo = () : string => {
        return this.modulo
    }
}
