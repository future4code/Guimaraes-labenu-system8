export class Student {
    private id: string
    public name: string
    public email: string
    public birthDate: Date
    public turma_id: string
    private hobbys: string[]

    constructor(id: string, name: string, email: string, birthDate: Date, turma_id: string, hobbys: string[]) {
        this.id = id
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.turma_id = turma_id
        this.hobbys = hobbys
    }

    public getId = () : string => {
        return this.id
    }
    public getName = () : string => {
        return this.name
    }
    public getEmail = () : string => {
        return this.email
    }
    public getBirthDate = () : Date => {
        return this.birthDate
    }
    public getTurmaId = () : string => {
        return this.turma_id
    }
    getHobbys = () : string[] => {
        return this.hobbys
    }
}

