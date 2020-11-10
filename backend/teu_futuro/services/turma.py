from ..schemas.turma import TurmaSchema
from .mock_turmas import TURMAS
from teu_futuro.database import TurmaDAO


class TurmaService:
    def __init__(self):
        self.dao = TurmaDAO()

    def obter_turmas(self):
        turmas_banco = self.dao.obter_todos()
        turmas = []
        for item in turmas_banco:
            turma_existente = next(filter(lambda t: t["id"] == item["turma"]["id"], turmas), None)
            if not turma_existente:
                turmas.append({ **item["turma"], "professores": [item["professor"]] })
            else:
                turma_existente["professores"].append(item["professor"])
        return turmas

    def obter_turma(self, turma_id):
        try:
            return TURMAS[turma_id - 1]
        except BaseException as err:
            print(err)
            return "Turma Inexistente"

    def criar_turma(self, dados_turma):
        # TODO: Criar lógica de criação quando tiver
        #  conexão com banco de dados
        TURMAS.append(dados_turma)
        return "Turma criada com sucesso"

