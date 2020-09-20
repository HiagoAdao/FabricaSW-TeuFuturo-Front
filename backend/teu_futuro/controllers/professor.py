from flask import jsonify, make_response
from teu_futuro.services.professor import ProfessorService


class ProfessorController:
    @staticmethod
    def obter_todos_professores():
        professor_service = ProfessorService()
        resp = professor_service.obter_todos_professores()
        return make_response(jsonify(resp), 200)
