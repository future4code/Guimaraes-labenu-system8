import knex from "knex";
import dotenv from "dotenv";
import { Hobbies } from "../data/Hobbies";

dotenv.config() 

export class HobbiesDataBase {

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

    

    public createHobbies = async (hobbies: Hobbies) => {
        try {
            await this.connection("hobby")
            .insert({
                id: hobbies.getId(),
                nome: hobbies.getNome()
                
            })
        } catch (error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
    
}