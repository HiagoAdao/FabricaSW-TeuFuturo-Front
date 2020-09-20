from ..schemas.professor import ProfessorSchema


class ProfessorService:
    def __init__(self):
        self.prof_schema = ProfessorSchema()

    def obter_todos_professores(self):
        # TODO fazer conexão com o banco de dados para obtenção
        return [
            self.prof_schema.dump(dict(
                nome="Fahad",
                sobrenome="Kalil",
                email="fahad.kalil@imed.edu.br"
            )),
            self.prof_schema.dump(dict(
                nome="Marcos",
                sobrenome="Santos",
                email="marcos.santos@imed.edu.br"
            ))
        ]
