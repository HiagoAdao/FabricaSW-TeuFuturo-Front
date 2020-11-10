from peewee import Model, AutoField, TextField


class Escola(Model):
    id = AutoField()
    nome = TextField(column_name="NOME")

    def to_dict(self):
        return dict(id=self.id, nome=self.nome)

    @staticmethod
    def from_dict(item_dict: dict):
        return Escola(**item_dict)

    class Meta:
        table_name = "ESCOLA"
