from marshmallow import Schema, fields


class ProfessorSchema(Schema):
    nome = fields.Str(allow_none=False)
    sobrenome = fields.Str(allow_none=False)
    email = fields.Email(allow_none=False)
