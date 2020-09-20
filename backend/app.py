from flask import Flask, request
from flask_cors import CORS
from teu_futuro import (
    TurmaController,
    ProfessorController,
    AlunoController,
    AtividadeController
)

app = Flask(__name__)
CORS(app)


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
@app.route("/aluno/<int:aluno_id>/inativar", methods=["PUT"])
def put_inativar_aluno(aluno_id):
    return AlunoController.inativar_aluno(aluno_id)


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
    app.run()
