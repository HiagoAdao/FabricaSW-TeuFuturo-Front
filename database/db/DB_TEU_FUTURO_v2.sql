USE teufuturo;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

create table PROFESSOR
(
    ID int unsigned auto_increment primary key,
    NOME varchar(25) not null,
    SOBRENOME varchar(25) null,
    EMAIL varchar(50) not null
);

create table TURMA
(
    ID int unsigned auto_increment primary key,
    NOME varchar(25) not null,
    DATA_INICIO datetime not null,
    DATA_FIM datetime not null
);

create table TURMA_PROFESSOR
(
    TURMA_ID int unsigned not null,
    PROFESSOR_ID int unsigned not null,
    constraint FK_TURMA_PROFESSOR_TURMA 
        foreign key (TURMA_ID) references TURMA(ID),
    constraint FK_TURMA_PROFESSOR_PROFESSOR 
        foreign key (PROFESSOR_ID) references PROFESSOR(ID),
    constraint TURMA_PROFESSOR_UNIQUE unique (TURMA_ID, PROFESSOR_ID)
);
