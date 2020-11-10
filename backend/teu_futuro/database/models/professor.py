from peewee import Model, AutoField, TextField


class Professor(Model):
    id = AutoField()
    nome = TextField(column_name="NOME")
    sobrenome = TextField(column_name="SOBRENOME")
    email = TextField(column_name="EMAIL")

    def to_dict(self):
        return dict(
            id=self.id,
            nome=self.nome,
            sobrenome=self.sobrenome,
            email=self.email
        )

    @staticmethod
    def from_dict(item_dict: dict):
        return Professor(**item_dict)

    class Meta:
        table_name = "PROFESSOR"
