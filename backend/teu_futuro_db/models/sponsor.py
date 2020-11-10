from peewee import Model, AutoField, TextField


class Sponsor(Model):
    id = AutoField()
    nome = TextField(column_name="NOME")

    def to_dict(self):
        return dict(id=self.id, nome=self.nome)

    @staticmethod
    def from_dict(item_dict: dict):
        return Sponsor(**item_dict)

    class Meta:
        table_name = "SPONSOR"
