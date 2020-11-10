import peewee as pw
from .factory_base import FactoryBase


class MySqlDatabaseFactory(FactoryBase):
    def __init__(self, instance, username, password, host, port):
        self.instance = instance
        self.username = username
        self.password = password
        self.host = host
        self.port = port

        self.singleton_db = None

        if (
            self.username is None or
            self.password is None or
            self.host is None or
            self.port is None
        ):
            exception_msg = (
                "Os parâmetros de: "
                "instância, usuário, senha, host e porta "
                "são obrigatórios."
            )
            raise Exception(exception_msg)

    def obter_db(self):
        if self.singleton_db is None:
            dict_ssl = dict(auth_plugin="mysql_native_password")
            self.singleton_db = pw.MySQLDatabase(
                self.instance,
                host=self.host,
                port=self.port,
                user=self.username,
                passwd=self.password,
                ssl=dict_ssl
            )
        return self.singleton_db
