from marshmallow import Schema, fields


class ProfessorSchema(Schema):
    id = fields.Int(allow_none=True)
    nome = fields.Str(allow_none=False)
    sobrenome = fields.Str(allow_none=False)
    email = fields.Email(allow_none=False)
