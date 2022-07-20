CREATE TABLE turmas (
        id VARCHAR (255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        modulo VARCHAR (255) DEFAULT 0 
    );
         
CREATE TABLE docente(
        id VARCHAR (255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc  DATE NOT NULL,
        turma_id VARCHAR(255), FOREIGN KEY(turma_id) REFERENCES turmas(id) 
);


CREATE TABLE especialidade (
        id VARCHAR (255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL UNIQUE
);

CREATE TABLE docente_especialidade(
        id VARCHAR (255) PRIMARY KEY,
        docente_id VARCHAR (255) NOT NULL UNIQUE, FOREIGN KEY(docente_id) REFERENCES docente(id), 
        especialidade_id VARCHAR(255) NOT NULL UNIQUE, FOREIGN KEY(especialidade_id) REFERENCES especialidade(id)
    );
 
 CREATE TABLE estudante(
        id VARCHAR (255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc  DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL UNIQUE, FOREIGN KEY(turma_id) REFERENCES turmas(id) 
);

CREATE TABLE hobby (
        id VARCHAR (255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL UNIQUE
);

CREATE TABLE estudante_hobby(
        id VARCHAR (255) PRIMARY KEY,
        estudante_id VARCHAR (255) NOT NULL UNIQUE, FOREIGN KEY(estudante_id) REFERENCES estudante(id), 
        hobby_id VARCHAR(255) NOT NULL UNIQUE, FOREIGN KEY(hobby_id) REFERENCES hobby(id)
    );
 

select * FROM estudante;
select * FROM docente;
select * FROM turmas;
INSERT INTO turmas VALUES








select * FROM turmas;
select * FROM docente;
    
    