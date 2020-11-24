const PAGES = {
    HOME: "/",
    LOGIN: "/login",
    LISTAGEM_TURMAS: "/turmas",
    TURMA: "/turma/:turma_id",
};

const development = {
    DOMAIN_URL: "http://127.0.0.1:5000"
};

const production = {
    DOMAIN_URL: "https://teu-futuro-backend.herokuapp.com/"
};

const env = process.env.NODE_ENV || "development";
console.log("Rodando na ENV:", env);
const config_options = { development, production };

const config = { ...config_options[env], PAGES };
export default config;
