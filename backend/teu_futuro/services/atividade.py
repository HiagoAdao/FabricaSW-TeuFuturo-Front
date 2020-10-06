from .mock_turmas import TURMAS


class AtividadeService:
    def obter_atividade_por_turma(self, turma_id):
        # TODO fazer integração com o banco de dados para obtenção
        # Implementar lógica de inativação (GET em ALUNO)
        # quando tiver banco de dados
        return TURMAS[turma_id - 1]["atividades"]

    def cadastrar_atividade_na_turma(self, turma_id, dados_atividade):
        # TODO: Criar lógica de criação quando tiver
        #  conexão com banco de dados
        TURMAS[turma_id - 1]["atividades"].append(dados_atividade)
        return (
            "Atividade cadastrada na turma "
            f"'{TURMAS[turma_id - 1]['nome']}' com sucesso"
        )
