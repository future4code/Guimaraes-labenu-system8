import knex from "knex";
import dotenv from "dotenv";
import {Especialidades} from "./data/Especialidades"

dotenv.config() 

export class SpecialtyDataBase {

    private connection = knex({
        client: "mysql",
        connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
    });

    

    public createSpecialty = async (especialidades: Especialidades) => {
        try {
            await this.connection("especialidade")
            .insert({
                id: especialidades.getId(),
                nome: especialidades.getNome()
            })
        } catch (error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
}