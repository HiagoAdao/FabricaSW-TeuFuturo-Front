from .factory_base import FactoryBase
from .mysql_database import MySqlDatabaseFactory


class DbFactoryUtil:
    factory_base_instance: FactoryBase = None


def registrar_factory_db(factory: FactoryBase = None):
    if factory is None:
        DbFactoryUtil.factory_base_instance = MySqlDatabaseFactory()
    else:
        DbFactoryUtil.factory_base_instance = factory


def injetar_db(parametro: str):
    def method_decorator(method_function):
        def wrapped(cls, **kwargs):
            if DbFactoryUtil.factory_base_instance is not None:
                print("Obtendo instância do Factory "
                      "de conexão com o banco - {}".format(
                          type(DbFactoryUtil.factory_base_instance)))
                kwargs[parametro] = \
                    DbFactoryUtil.factory_base_instance.obter_db()
            return method_function(cls, **kwargs)

        return wrapped
    return method_decorator
