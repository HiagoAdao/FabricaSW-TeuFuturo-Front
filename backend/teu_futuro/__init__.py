from teu_futuro.controllers.professor import ProfessorController
from teu_futuro.controllers.turma import TurmaController
from teu_futuro.controllers.aluno import AlunoController
from teu_futuro.controllers.atividade import AtividadeController
from teu_futuro.database import AlunoDAO, ConfiguradorDB


__all__ = [
    "ConfiguradorDB",
    "TurmaController",
    "ProfessorController",
    "AlunoController",
    "AtividadeController",
    "AlunoDAO"
]
