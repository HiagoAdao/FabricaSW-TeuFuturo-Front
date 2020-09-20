from ..schemas.turma import TurmaSchema
from .mock_turmas import TURMAS


class TurmaService:
    def obter_turmas(self):
        # TODO fazer conexão com o banco de dados para obtenção
        return TURMAS

    def obter_turma(self, turma_id):
        try:
            return TURMAS[turma_id]
        except BaseException as err:
            print(err)
            return "Turma Inexistente"

    def criar_turma(self, dados_turma):
        # TODO: Criar lógica de criação quando tiver
        #  conexão com banco de dados
        TURMAS.append(dados_turma)
        return "Turma criada com sucesso"

