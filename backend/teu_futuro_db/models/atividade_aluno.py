from peewee import Model, TextField, ForeignKeyField
from .aluno import Aluno
from .atividade import Atividade


class AtividadeAluno(Model):
    aluno = ForeignKeyField(
        Aluno,
        column_name="ALUNO_ID",
    )
    atividade = ForeignKeyField(
        Atividade,
        column_name="ATIVIDADE_ID",
    )
    resolucao = TextField(column_name="RESOLUCAO")

    def to_dict(self):
        return dict(
            aluno=self.aluno.to_dict(),
            atividade=self.atividade.to_dict(),
            resolucao=self.resolucao
        )

    @staticmethod
    def from_dict(item_dict: dict):
        return AtividadeAluno(**item_dict)

    class Meta:
        table_name = "ATIVIDADE_ALUNO"
