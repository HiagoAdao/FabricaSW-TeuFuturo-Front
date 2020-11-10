from ..factory.db_injection import injetar_db
from ..models.professor import Professor


class ProfessorDAOException(BaseException):
    def __init__(self, msg):
        super(ProfessorDAOException, self).__init__(msg)


class ProfessorDAO:
    @injetar_db("instancia_db")
    def __init__(self, instancia_db=None):
        self.db = instancia_db
        if self.db is not None:
            self.db.bind([Professor])

    def obter_todos(self):
        try:
            results = list(map(lambda p: p.to_dict(), Professor.select()))
            return results
        except BaseException as e:
            raise ProfessorDAOException(f"Erro em ProfessorDAO.obter_todos: {e}")
