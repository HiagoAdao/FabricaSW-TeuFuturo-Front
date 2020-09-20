from enum import Enum
from datetime import datetime


class Formatos(Enum):
    BRASILEIRO = "%d/%m/%Y"


def converte_str_para_datetime(data, formato_data):
    return datetime.strptime(data, formato_data)


def converte_data_para_str(data, formato_data):
    return datetime.strftime(data, formato_data)
