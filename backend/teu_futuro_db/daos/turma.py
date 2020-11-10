from ..factory.db_injection import injetar_db
from ..models.turma import Turma


class TurmaDAOException(BaseException):
    def __init__(self, msg):
        super(TurmaDAOException, self).__init__(msg)


class TurmaDAO:
    @injetar_db("instancia_db")
    def __init__(self, instancia_db=None):
        self.db = instancia_db
        if self.db is not None:
            self.db.bind([Turma])

    def obter_todos(self):
        try:
            results = list(map(lambda t: t.to_dict(), Turma.select()))
            return results
        except BaseException as e:
            raise TurmaDAOException(f"Erro em TurmaDAO.obter_todos: {e}")
