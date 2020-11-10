from teu_futuro.responses import Responses
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
        return Responses.success(resp)

    @staticmethod
    def cadastrar_atividade(turma_id, request_body):
        try:
            dados_atividade = AtividadeSchema().dump(request_body)
            resp = AtividadeService().cadastrar_atividade_na_turma(
                turma_id, dados_atividade)
            return Responses.created(resp)
        except BaseException as err:
            return Responses.bad_request(err)
