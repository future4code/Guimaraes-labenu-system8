import knex from "knex";
import dotenv from "dotenv";
import { Turmas } from "../data/Turmas";

dotenv.config() 

export class ClassDataBase {

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

    

    public createClass = async (turmas: Turmas) => {
        try {
            await this.connection("turmas")
            .insert({
                id: turmas.getId(),
                nome: turmas.getNome(),
                modulo: turmas.getModulo()
            })
        } catch (error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
}