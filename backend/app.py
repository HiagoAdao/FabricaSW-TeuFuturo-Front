from flask import request
from teu_futuro import (
    TurmaController,
    ProfessorController,
    AlunoController,
    AtividadeController
)
from config import ConfigurationManager

app = ConfigurationManager.inicializar()


@app.route("/teste")
def get_teste():
    from flask import jsonify, make_response
    from teu_futuro_db import EscolaDAO
    dao = EscolaDAO()
    return make_response(
        jsonify(dict(status='success', data=dao.obter_todos())),
        200
    )


# =============== GETs ===============
@app.route("/turmas")
def get_all_turmas():
    return TurmaController.obter_todas_turmas()


@app.route("/turma/<int:turma_id>")
def get_turma(turma_id):
    return TurmaController.obter_turma(turma_id)


@app.route("/professores")
def get_all_professores():
    return ProfessorController.obter_todos_professores()


@app.route("/turma/<int:turma_id>/alunos")
def get_all_alunos(turma_id):
    return AlunoController.obter_todos_alunos(turma_id)


@app.route("/turma/<int:turma_id>/atividades")
def get_all_atividades(turma_id):
    return AtividadeController.obter_todas_atividades(turma_id)


# =============== PUTs ===============
@app.route(
    "/turma/<int:turma_id>/aluno/<int:aluno_id>/inativar", methods=["PUT"])
def put_inativar_aluno(turma_id, aluno_id):
    return AlunoController.inativar_aluno(turma_id, aluno_id)


# =============== POSTs ===============
@app.route("/turma", methods=["POST"])
def post_turma():
    return TurmaController.criar_turma(request.json)


@app.route("/turma/<int:turma_id>/aluno", methods=["POST"])
def post_aluno_turma(turma_id):
    return AlunoController.cadastrar_aluno(turma_id, request.json)


@app.route("/turma/<int:turma_id>/atividade", methods=["POST"])
def post_atividade_turma(turma_id):
    return AtividadeController.cadastrar_atividade(turma_id, request.json)


if __name__ == "__main__":
    app.run(port=5000)
