from marshmallow import Schema, fields
from .professor import ProfessorSchema
from .aluno import AlunoSchema
from .atividade import AtividadeSchema


class TurmaSchema(Schema):
    nome = fields.Str(allow_none=False)
    professores = fields.Nested(ProfessorSchema, many=True, allow_none=False)
    alunos = fields.Nested(AlunoSchema, many=True, allow_none=True)
    atividades = fields.Nested(AtividadeSchema, many=True, allow_none=True)
    data_inicio = fields.DateTime(format="%d/%m/%Y", allow_none=False)
    data_fim = fields.DateTime(format="%d/%m/%Y", allow_none=False)
