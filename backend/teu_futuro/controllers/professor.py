from teu_futuro.responses import Responses
from teu_futuro.services.professor import ProfessorService


class ProfessorController:
    @staticmethod
    def obter_todos_professores():
        professor_service = ProfessorService()
        resp = professor_service.obter_todos_professores()
        return Responses.success(resp)
