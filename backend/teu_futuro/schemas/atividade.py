from marshmallow import Schema, fields


class AtividadeSchema(Schema):
    nome = fields.Str(allow_none=False)
    descricao = fields.Str(allow_none=False)
    valor = fields.Integer(allow_none=False)
