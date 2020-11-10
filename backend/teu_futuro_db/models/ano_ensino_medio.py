from peewee import Model, AutoField, TextField


class AnoEnsinoMedio(Model):
    id = AutoField()
    ano = TextField(column_name="ANO")

    def to_dict(self):
        return dict(id=self.id, ano=self.ano)

    @staticmethod
    def from_dict(item_dict: dict):
        return AnoEnsinoMedio(**item_dict)

    class Meta:
        table_name = "ANO_ENSINO_MEDIO"
