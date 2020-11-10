from teu_futuro.responses import Responses
from ..util.date import converte_str_para_datetime, Formatos
from ..services.turma import TurmaService
from ..schemas.turma import TurmaSchema


class TurmaController:
    @staticmethod
    def obter_todas_turmas():
        turma_service = TurmaService()
        turmas = turma_service.obter_turmas()
        resp = [TurmaSchema().load(turma)
                for turma in turmas]
        return Responses.success(resp)

    @staticmethod
    def obter_turma(turma_id):
        turma_service = TurmaService()
        if turma_id == 0 or not isinstance(turma_id, int) or turma_id > 4:
            return "Turma inexistente"
        turma = turma_service.obter_turma(turma_id)
        resp = TurmaSchema().load(turma)
        return Responses.success(resp)

    @staticmethod
    def criar_turma(request_body):
        try:
            request_body["data_inicio"] = converte_str_para_datetime(
                request_body["data_inicio"], Formatos.BRASILEIRO.value
            )
            request_body["data_fim"] = converte_str_para_datetime(
                request_body["data_fim"], Formatos.BRASILEIRO.value
            )
            request_body["atividades"] = []
            request_body["alunos"] = []
            dados_turma = TurmaSchema().dump(request_body)
            resp = TurmaService().criar_turma(dados_turma)
            return Responses.created(resp)
        except BaseException as err:
            return Responses.bad_request(err)
