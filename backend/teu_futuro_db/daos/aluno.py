from ..factory.db_injection import injetar_db
from ..models.aluno import Aluno
from ..models.escola import Escola
from ..models.sponsor import Sponsor
from ..models.ano_ensino_medio import AnoEnsinoMedio


class AlunoDAOException(BaseException):
    def __init__(self, msg):
        super(AlunoDAOException, self).__init__(msg)


class AlunoDAO:
    @injetar_db("instancia_db")
    def __init__(self, instancia_db=None):
        self.db = instancia_db
        if self.db is not None:
            self.db.bind([
                Aluno,
                Escola,
                Sponsor,
                AnoEnsinoMedio
            ])

    def obter_todos(self):
        try:
            results = list(map(lambda a: a.to_dict(), Aluno.select()))
            return results
        except BaseException as e:
            raise AlunoDAOException(f"Erro em AlunoDAO.obter_todos: {e}")
