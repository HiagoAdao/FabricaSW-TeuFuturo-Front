from flask import jsonify, make_response
from ..services.turma import TurmaService
from ..schemas.turma import TurmaSchema


class TurmaController:
    @staticmethod
    def obter_todas_turmas():
        turma_service = TurmaService()
        resp = [TurmaSchema().load(turma)
                for turma in turma_service.obter_turmas()]
        return make_response(jsonify(resp), 200)

    @staticmethod
    def obter_turma(turma_id):
        turma_service = TurmaService()
        resp = TurmaSchema().load(turma_service.obter_turma(turma_id))
        return make_response(jsonify(resp), 200)

    @staticmethod
    def criar_turma(request_body):
        try:
            dados_turma = TurmaSchema().load(request_body)
            resp = TurmaService().criar_turma(dados_turma)
            return make_response(jsonify(resp), 200)
        except BaseException as err:
            return make_response(jsonify(err), 400)
