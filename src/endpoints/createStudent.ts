import knex from "knex";
import dotenv from "dotenv";
import { Student } from "../data/Student";
import { v4 as uuidv4 } from "uuid";
import { BaseDatabase } from "../data/BaseDataBase";

dotenv.config()

export class studentDB extends BaseDatabase {

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
                birthDate: students.getBirthDate(),
                turma_id: students.getTurmaId(), 
            })
        } catch (error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public studenthobby = async (students: Student, hobby: string[]) => {
        try {
            const result: Student[] = await BaseDatabase.connection('student_hobby')
                .select("id", "name")
                .where("name", hobby)
            if (hobby.length) {
                for (const element of result) {
                    await this.connection("student_hobby")
                    .insert({
                        student_id: students.getId(),
                        id: uuidv4(),
                    })
                }
                await BaseDatabase.connection('student_hobby').insert(name)
            }} catch (error: any){
                throw new Error(error.sqlMessage || error.message)
            }
        }

            public getAllStudents = async () => {
                try {
                    const result: Student[] = await BaseDatabase.connection('student')
                        .select("id", "name", "email", "birthDate", "turma_id", "hobbys")
                    return result
                } catch (error: any){
                    throw new Error(error.sqlMessage || error.message)
                }
            }
            public getStudentById = async (id: string) => {
                try {
                    const result: Student[] = await BaseDatabase.connection('student')
                        .select("id", "name", "email", "birthDate", "turma_id", "hobbys")
                        .where("id", id)
                    return result
                } catch (error: any){
                    throw new Error(error.sqlMessage || error.message)
                }
            }
            public getStudentByName = async (name: string) => {
                try {
                    const result: Student[] = await BaseDatabase.connection('student')
                        .select("id", "name", "email", "birthDate", "turma_id", "hobbys")
                        .where("name", name)
                    return result
                } catch (error: any){
                    throw new Error(error.sqlMessage || error.message)
                }
            }
}


