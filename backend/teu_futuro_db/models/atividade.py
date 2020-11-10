from peewee import Model, AutoField, TextField, ForeignKeyField
from .turma import Turma


class Atividade(Model):
    id = AutoField()
    nome = TextField(column_name="NOME")
    descricao = TextField(column_name="DESCRICAO")
    peso = TextField(column_name="PESO")
    turma = ForeignKeyField(
        Turma,
        column_name="TURMA_ID",
        to_field="id"
    )

    def to_dict(self):
        return dict(
            id=self.id,
            nome=self.nome,
            descricao=self.descricao,
            peso=self.peso,
            turma=self.turma.to_dict()
        )

    @staticmethod
    def from_dict(item_dict: dict):
        return Atividade(**item_dict)

    class Meta:
        table_name = "ATIVIDADE"
