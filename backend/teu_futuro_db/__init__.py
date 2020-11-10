from .config.db_config import ConfiguradorDB
from .daos.escola import EscolaDAO
from .daos.aluno import AlunoDAO
from .daos.professor import ProfessorDAO
from .daos.turma import TurmaDAO


__all__ = [
    "ConfiguradorDB",
    "EscolaDAO",
    "AlunoDAO",
    "ProfessorDAO",
    "TurmaDAO"
]
