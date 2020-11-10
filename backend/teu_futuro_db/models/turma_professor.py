from peewee import Model, ForeignKeyField
from .turma import Turma
from .professor import Professor


class TurmaProfessor(Model):
    turma = ForeignKeyField(Turma, column_name="TURMA_ID")
    professor = ForeignKeyField(Professor, column_name="PROFESSOR_ID")

    def to_dict(self):
        return dict(
            turma=self.turma.to_dict(),
            professor=self.professor.to_dict()
        )

    @staticmethod
    def from_dict(item_dict: dict):
        return TurmaProfessor(**item_dict)

    class Meta:
        table_name = "TURMA_PROFESSOR"
