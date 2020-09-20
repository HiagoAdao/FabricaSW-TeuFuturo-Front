from ..services.professor import ProfessorService
from ..schemas.turma import TurmaSchema
from ..util.date import converte_str_para_datetime, Formatos

# TODO: remover quando tiver conexão com banco de dados
#  Mock somente para testes
turma_schema = TurmaSchema()
TURMAS = [
    turma_schema.dump(dict(
        nome="Teu Futuro Verão 2021",
        professores=ProfessorService().obter_todos_professores(),
        alunos=[],
        atividades=[],
        data_inicio=converte_str_para_datetime(
            "12/02/2020", Formatos.BRASILEIRO.value),
        data_fim=converte_str_para_datetime(
            "12/05/2020", Formatos.BRASILEIRO.value)
    )),
    turma_schema.dump(dict(
        nome="Teu Futuro Inverno 2021",
        professores=ProfessorService().obter_todos_professores(),
        alunos=[],
        atividades=[],
        data_inicio=converte_str_para_datetime(
            "12/06/2020", Formatos.BRASILEIRO.value),
        data_fim=converte_str_para_datetime(
            "12/09/2020", Formatos.BRASILEIRO.value)
    ))
]
