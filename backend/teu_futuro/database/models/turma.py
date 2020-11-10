from peewee import Model, AutoField, TextField
from ..custom_fields.date_time_utc import DateTimeUtcField
from teu_futuro.util.date import (
    converte_data_para_str,
    Formatos
)


class Turma(Model):
    id = AutoField()
    nome = TextField(column_name="NOME")
    data_inicio = DateTimeUtcField(column_name="DATA_INICIO")
    data_fim = DateTimeUtcField(column_name="DATA_FIM")

    def to_dict(self):
        return dict(
            id=self.id,
            nome=self.nome,
            data_inicio=converte_data_para_str(
                self.data_inicio, Formatos.BRASILEIRO.value),
            data_fim=converte_data_para_str(
                self.data_fim, Formatos.BRASILEIRO.value)
        )

    @staticmethod
    def from_dict(item_dict: dict):
        return Turma(**item_dict)

    class Meta:
        table_name = "TURMA"
