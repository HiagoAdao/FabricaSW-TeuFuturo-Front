from marshmallow import Schema, fields


class AlunoSchema(Schema):
    nome = fields.Str(allow_none=False)
    sobrenome = fields.Str(allow_none=False)
    email = fields.Email(allow_none=False)
    inativo = fields.Boolean(allow_none=False)
