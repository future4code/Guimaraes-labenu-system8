export class Student {
    private id: string
    public name: string
    public email: string
    public birthDate: Date

    constructor(id: string, name: string, email: string, birthDate: Date) {
        this.id = id
        this.name = name
        this.email = email
        this.birthDate = birthDate
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
}

