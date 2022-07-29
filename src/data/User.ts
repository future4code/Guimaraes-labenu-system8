import { v4 as uuid } from "uuid"

export class User {
    private id: string
    private name: string
    private email: string
    private dataNasc: Date
    private turmaId: string

    constructor(name: string, email: string, dataNasc: Date, turmaId: string) {
        this.id = uuid()
        this.name = name
        this.email = email
        this.dataNasc = dataNasc
        this.turmaId = turmaId
    }

    public getId = (): string => {
        return this.id
    }
    public getName = (): string => {
        return this.name
    }
    public getEmail = (): string => {
        return this.email
    }
    public getdataNasc = (): Date => {
        return this.dataNasc
    }
    public getTurmaId = (): string => {
        return this.turmaId
    }
    public setName = (name: string): void => {
        this.name = name

    }
    public setEmail = (email: string): void => {
        this.email = email

    }
    public setDataNasc = (dataNasc: Date): void => {
        this.dataNasc = dataNasc

    }
    public setturmaId = (turmaId: string): void => {
        this.turmaId = turmaId

    }

}