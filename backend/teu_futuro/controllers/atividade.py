from flask import jsonify, make_response
from teu_futuro.services.atividade import AtividadeService
from teu_futuro.schemas.atividade import AtividadeSchema


class AtividadeController:
    @staticmethod
    def obter_todas_atividades(turma_id):
        aluno_service = AtividadeService()
        resp = [ 
            AtividadeSchema().load(ativ)
            for ativ in aluno_service.obter_atividade_por_turma(turma_id)
        ]
        return make_response(jsonify(resp), 200)

    @staticmethod
    def cadastrar_atividade(turma_id, request_body):
        try:
            dados_atividade = AtividadeSchema().dump(request_body)
            resp = AtividadeService().cadastrar_atividade_na_turma(
                turma_id, dados_atividade)
            return make_response(jsonify(resp), 200)
        except BaseException as err:
            return make_response(jsonify(err), 400)
