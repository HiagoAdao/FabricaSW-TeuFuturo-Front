from ..models.escola import Escola
from ..factory.db_injection import injetar_db


class EscolaDAOException(BaseException):
    def __init__(self, msg):
        super(EscolaDAOException, self).__init__(msg)


class EscolaDAO:
    @injetar_db("instancia_db")
    def __init__(self, instancia_db=None):
        self.db = instancia_db
        if self.db is not None:
            self.db.bind([Escola])

    def obter_todos(self):
        try:
            results = list(map(lambda es: es.to_dict(), Escola.select()))
            return results
        except BaseException as e:
            raise EscolaDAOException(f"Error em EscolaDAO.obter_todos: {e}")
