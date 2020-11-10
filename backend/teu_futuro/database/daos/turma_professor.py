from ..factory.db_injection import injetar_db
from ..models.turma_professor import TurmaProfessor


class TurmaProfessorDAOException(BaseException):
    def __init__(self, msg):
        super(TurmaProfessorDAOException, self).__init__(msg)


class TurmaProfessorDAO:
    @injetar_db("instancia_db")
    def __init__(self, instancia_db=None):
        self.db = instancia_db
        if self.db is not None:
            self.db.bind([TurmaProfessor])

    def salvar(self, dados_turma_professor):
        with self.db.atomic() as transaction:
            try:
                turma_professor = TurmaProfessor.from_dict(
                    dados_turma_professor)
                turma_professor.save()

                transaction.commit()

                return turma_professor
            except BaseException as e:
                if transaction is not None:
                    transaction.rollback()
                raise TurmaProfessorDAOException(
                    f"Erro em TurmaProfessorDAO.salvar: {e}")
