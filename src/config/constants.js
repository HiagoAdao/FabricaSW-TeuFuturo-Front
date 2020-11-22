const PAGES = {
    HOME: "/",
    LOGIN: "/login",
    LISTAGEM_TURMAS: "/turmas",
    TURMA: "/turma",
};

const development = {
    DOMAIN_URL: "http://127.0.0.1:5000"
};

const production = {
    
};

const env = process.env.NODE_ENV || "development";
const config_options = { development, production };

const config = { ...config_options[env], PAGES };
export default config;
