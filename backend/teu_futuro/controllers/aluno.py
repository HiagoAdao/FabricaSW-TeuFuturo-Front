from flask import jsonify, make_response
from teu_futuro.services.aluno import AlunoService
from teu_futuro.schemas.aluno import AlunoSchema


class AlunoController:
    @staticmethod
    def inativar_aluno(aluno_id):
        aluno_service = AlunoService()
        resp = aluno_service.inativar_aluno(aluno_id)
        return make_response(jsonify(resp), 200)

    @staticmethod
    def obter_todos_alunos(turma_id):
        aluno_service = AlunoService()
        resp = aluno_service.obter_alunos_por_turma(turma_id)
        return make_response(jsonify(resp), 200)

    @staticmethod
    def cadastrar_aluno(turma_id, request_body):
        try:
            dados_aluno = AlunoSchema().load(request_body)
            resp = AlunoService().cadastrar_aluno_na_turma(
                turma_id, dados_aluno)
            return make_response(jsonify(resp), 200)
        except BaseException as err:
            return make_response(jsonify(err), 400)
