import app from "./app";
import { Request, Response} from "express"
import { v4 as uuid } from "uuid"
import { Turmas } from "./data/Turmas";
import { ClassDataBase } from "./endpoints/createClass";
import { SpecialtyDataBase } from "./endpoints/createSpecialties";
import { Especialidades } from "./data/Especialidades";
import {Hobbies} from "./data/Hobbies";
import {HobbiesDataBase} from "./endpoints/createHobbies"
import {Student} from "./data/Student";
import { studentDB } from "./endpoints/createStudent";


app.get("/teste", (req: Request, res: Response) => {
    res.send("blablabla")
})

app.post("/turmas", async (req: Request, res: Response) => {
    
    try {

        const {nome, modulo} = req.body
        const id = uuid().toString();

        const newClass: Turmas = new Turmas (id, nome, modulo)
        const classDB = new ClassDataBase()

        await classDB.createClass(newClass)

        res.status(200).send("Turma cadastrada com sucesso")
        
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
        
    }
})

app.post("/especialidades", async (req: Request, res: Response) => {
    
    try {

        const {nome} = req.body
        const id = uuid().toString();

        const newSpecialty: Especialidades = new Especialidades (id, nome)
        const specialtyDB = new SpecialtyDataBase()

        await specialtyDB.createSpecialty(newSpecialty)

        res.status(200).send("Especialidade cadastrada com sucesso")
        
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
        
    }
})

app.post("/hobbys", async (req: Request, res: Response) => {
    
    try {

        const {nome} = req.body
        const id = uuid().toString();

        const newHobby: Hobbies = new Hobbies (id, nome)
        const hobbyDB = new HobbiesDataBase()

        await hobbyDB.createHobbies(newHobby)

        res.status(200).send("Especialidade cadastrada com sucesso")
        
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
        
    }
})

app.post("/alunos", async (req: Request, res: Response) => {
        
        try {
    
            const { name, email, birthDate, turma_id, hobbys}:any = req.body
            const id = uuid().toString();

            const newStudent: Student = new Student (id, name, email, birthDate, turma_id, hobbys)
            const studentData = new studentDB()

            await studentData.createStudent(newStudent)

            res.status(200).send("Aluno cadastrado com sucesso")

        } catch (error: any) {
            res.status(400).send(error.sqlMessage || error.message)
            
        }
    }
)

app.get("/alunos", async (req: Request, res: Response) => {
    try {
        const studentData = new studentDB()
        const students = await studentData.getAllStudents()
        res.status(200).json(students)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
)

app.get("/alunos/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const studentData = new studentDB()
        const student = await studentData.getStudentById(id)
        res.status(200).json(student)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
)

app.get("/alunos/:name", async (req: Request, res: Response) => {
    try {
        const name = req.params.name
        const studentData = new studentDB()
        const student = await studentData.getStudentByName(name)
        res.status(200).json(student)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}
)

