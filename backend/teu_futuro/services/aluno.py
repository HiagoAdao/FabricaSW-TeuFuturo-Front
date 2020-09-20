from .mock_turmas import TURMAS


class AlunoService:
    def obter_alunos_por_turma(self, turma_id):
        # TODO fazer integração com o banco de dados para obtenção
        # Implementar lógica de inativação (GET em ALUNO)
        # quando tiver banco de dados
        return TURMAS[turma_id]["alunos"]

    def cadastrar_aluno_na_turma(self, turma_id, dados_aluno):
        # TODO: Criar lógica de criação quando tiver
        #  conexão com banco de dados
        TURMAS[turma_id]["alunos"].append(dados_aluno)
        return f"Aluno cadastrado na turma {turma_id} com sucesso"

    def inativar_aluno(self, aluno_id):
        # TODO fazer integração com o banco de dados para inativação
        # Implementar lógica de inativação (UPDATE em ALUNO)
        # quando tiver banco de dados
        return f"Aluno {aluno_id} inativado com sucesso"
