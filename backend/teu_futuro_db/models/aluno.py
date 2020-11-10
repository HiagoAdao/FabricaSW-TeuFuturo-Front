from peewee import (
    Model, AutoField, TextField,
    BooleanField, ForeignKeyField
)
from .sponsor import Sponsor
from .escola import Escola
from .ano_ensino_medio import AnoEnsinoMedio


class Aluno(Model):
    id = AutoField()
    nome = TextField(column_name="NOME")
    sobrenome = TextField(column_name="SOBRENOME")
    email = TextField(column_name="EMAIL")
    inativo = BooleanField(column_name="INATIVO")
    sponsor = ForeignKeyField(
        Sponsor,
        column_name="SPONSOR_ID",
        backref="alunos"
    )
    escola = ForeignKeyField(
        Escola,
        column_name="ESCOLA_ID",
        backref="alunos"
    )
    ano_ensino_medio = ForeignKeyField(
        AnoEnsinoMedio,
        column_name="ANO_ENSINO_MEDIO_ID",
        backref="alunos"
    )

    def to_dict(self):
        return dict(
            id=self.id,
            nome=self.nome,
            sobrenome=self.sobrenome,
            email=self.email,
            inativo=self.inativo,
            sponsor=self.sponsor.to_dict(),
            escola=self.escola.to_dict(),
            ano_ensino_medio=self.ano_ensino_medio.to_dict()
        )

    @staticmethod
    def from_dict(item_dict: dict):
        return Aluno(**item_dict)

    class Meta:
        table_name = "ALUNO"
