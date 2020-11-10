from ..factory.db_injection import injetar_db
from ..models.turma import Turma
from ..models.professor import Professor
from ..models.turma_professor import TurmaProfessor


class TurmaDAOException(BaseException):
    def __init__(self, msg):
        super(TurmaDAOException, self).__init__(msg)


class TurmaDAO:
    @injetar_db("instancia_db")
    def __init__(self, instancia_db=None):
        self.db = instancia_db
        if self.db is not None:
            self.db.bind([
                Turma,
                Professor,
                TurmaProfessor
            ])

    def obter_todos(self):
        try:
            query = (
                TurmaProfessor.select(
                    Turma,
                    Professor
                )
                .join(Turma,
                      on=(Turma.id == TurmaProfessor.turma))
                .switch(TurmaProfessor)
                .join(Professor,
                      on=(Professor.id ==
                          TurmaProfessor.professor))
            )
            return list(map(lambda turma: turma.to_dict(), query))
        except BaseException as e:
            raise TurmaDAOException(f"Erro em TurmaDAO.obter_todos: {e}")

    def salvar(self, dados_turma):
        with self.db.atomic() as transaction:
            try:
                turma = Turma.from_dict(dados_turma)
                turma.save()

                transaction.commit()
                
                return turma.id
            except BaseException as e:
                if transaction is not None:
                    transaction.rollback()
                raise ProfessorDAOException(f"Erro em TurmaDAO.salvar: {e}")
