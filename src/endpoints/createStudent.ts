import knex from "knex";
import dotenv from "dotenv";
import { Student } from "../data/Student";
import { v4 as uuidv4 } from "uuid";

dotenv.config()

export class studentDB {

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

    public createStudent = async (students: Student) => {
        try {
            await this.connection("student")
            .insert({
                id: uuidv4(),
                name: students.getName(),
                email: students.getEmail(),
                birthDate: students.getBirthDate()
            })
        } catch (error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

