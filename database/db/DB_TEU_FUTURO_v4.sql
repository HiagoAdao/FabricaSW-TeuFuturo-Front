USE teufuturo;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

create table ALUNO
(
    ID int unsigned auto_increment primary key,
    NOME varchar(25) not null,
    SOBRENOME varchar(25) null,
    EMAIL varchar(50) not null,
    INATIVO tinyint not null,
    SPONSOR_ID int unsigned not null,
    ESCOLA_ID int unsigned not null,
    ANO_ENSINO_MEDIO_ID int unsigned not null,
    TURMA_ID int unsigned not null,
    constraint FK_ALUNO_SPONSOR
        foreign key (SPONSOR_ID) references SPONSOR(ID),
    constraint FK_ALUNO_ESCOLA
        foreign key (ESCOLA_ID) references ESCOLA(ID),
    constraint FK_ALUNO_ANO_ENSINO_MEDIO
        foreign key (ANO_ENSINO_MEDIO_ID) references ANO_ENSINO_MEDIO(ID),
    constraint FK_ALUNO_TURMA
        foreign key (TURMA_ID) references TURMA(ID)
);

create table ATIVIDADE
(
    ID int unsigned auto_increment primary key,
    NOME varchar(125) not null,
    DESCRICAO text not null,
    PESO int unsigned not null,
    TURMA_ID int unsigned not null,
    constraint FK_ATIVIDADE_TURMA
        foreign key (TURMA_ID) references TURMA(ID)
);

create table ATIVIDADE_ALUNO
(
    ALUNO_ID int unsigned not null,
    ATIVIDADE_ID int unsigned not null,
    RESOLUCAO text not null,
    constraint FK_ATIVIDADE_ALUNO_ALUNO
        foreign key (ALUNO_ID) references ALUNO(ID),
    constraint FK_ATIVIDADE_ALUNO_ATIVIDADE
        foreign key (ATIVIDADE_ID) references ATIVIDADE(ID),
    constraint ATIVIDADE_ALUNO_UNIQUE unique (ALUNO_ID, ATIVIDADE_ID)
);
