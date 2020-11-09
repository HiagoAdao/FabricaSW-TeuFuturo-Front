USE teufuturo;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

-- ---------- DOMAIN TABLES ----------
create table ESCOLA
(
    ID int unsigned auto_increment primary key,
    NOME varchar(125) not null
);

create table SPONSOR
(
    ID int unsigned auto_increment primary key,
    NOME varchar(125) not null
);

create table ANO_ENSINO_MEDIO
(
    ID int unsigned auto_increment primary key,
    ANO varchar(5) not null
);
-- ----------------------------------------
