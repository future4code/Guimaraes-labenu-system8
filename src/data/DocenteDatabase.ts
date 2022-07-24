import { randomUUID } from "crypto";
import { BaseDatabase } from "./BaseDataBase";
import { Docente } from "./Docente";

import { v4 as uuid } from "uuid"



export class DocenteDatabase extends BaseDatabase {



    public createDocente = async (docente: Docente):Promise<void> => {
        try {

            await DocenteDatabase.connection("docente").insert({
                id: docente.getId(),
                nome: docente.getName(),
                email: docente.getEmail(),
                data_nasc: docente.getdataNasc(),
                

            })
            const docenteEspecialidades = docente.getEspecialidades()
            
            
            for(let i=0;i<docenteEspecialidades.length;i++){
                let espId= await DocenteDatabase.connection("especialidade").select("id").where({
                    nome: docenteEspecialidades[i]
                })
               if(espId){
               
                 await DocenteDatabase.connection("docente_especialidade").insert({
                    id: uuid(),
                    docente_id: docente.getId(),
                    especialidade_id:espId[0].id
                  })
               }

                }

            


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
 
        }


    }
    public getAllDocentes = async (): Promise<any> => {
        try {
            const result = await DocenteDatabase.connection("docente")
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }
    public getdocente= async (id:string): Promise<any> => {
        try {
            const result = await DocenteDatabase.connection("docente").where({id})
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }
    public  mudarDocenteTurma=async (id:string,turmaId:string): Promise<any> => {
        try {
           await DocenteDatabase.connection("docente").update({
            turma_id: turmaId
           }).where({id})
            return ""
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);

        }
    }
    

}