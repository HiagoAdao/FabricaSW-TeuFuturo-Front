from ..factory.db_injection import registrar_factory_db
from ..factory.mysql_database import MySqlDatabaseFactory
from ..factory.factory_base import FactoryBase
import peewee as pw


class ConfiguradorDB:
    class InMemoryDB(FactoryBase):
        def obter_db(self):
            return pw.SqliteDatabase(":memory")

    @staticmethod
    def inicializar(config):
        instancia = getattr(config, "INSTANCE_DB", "rootdb")
        usuario = getattr(config, "USER_DB", "root")
        senha = getattr(config, "PASSWORD_DB", "root")
        host = getattr(config, "HOST_DB", "127.0.0.1")
        porta = getattr(config, "PORT_DB", "3306")

        mysql_factory = MySqlDatabaseFactory(
            instance=instancia,
            username=usuario,
            password=senha,
            host=host,
            port=int(porta)
        )
        registrar_factory_db(mysql_factory)

    @staticmethod
    def inicializar_memoria():
        in_mem_factory = ConfiguradorDB.InMemoryDB()
        registrar_factory_db(in_mem_factory)
