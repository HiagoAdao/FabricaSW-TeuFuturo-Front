from .mock_turmas import TURMAS


class AtividadeService:
    def obter_atividade_por_turma(self, turma_id):
        # TODO fazer integração com o banco de dados para obtenção
        # Implementar lógica de inativação (GET em ALUNO)
        # quando tiver banco de dados
        return TURMAS[turma_id]["atividades"]

    def cadastrar_atividade_na_turma(self, turma_id, dados_atividade):
        # TODO: Criar lógica de criação quando tiver
        #  conexão com banco de dados
        TURMAS[turma_id]["atividades"].append(dados_atividade)
        return f"Atividade cadastrada na turma {turma_id} com sucesso"
