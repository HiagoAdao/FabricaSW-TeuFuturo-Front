from os import environ
from flask import Flask
from flask_cors import CORS
from teu_futuro import ConfiguradorDB


class ConfigBase:
    INSTANCE_DB = "teufuturo"
    USER_DB = "usr_tf"
    PASSWORD_DB = "tf2020"
    HOST_DB = "127.0.0.1"
    PORT_DB = "3308"


class DevelopmentConfig(ConfigBase):
    pass


class ProductionConfig(ConfigBase):
    pass


class ConfigurationManager:
    CONFIGS = {
        "development": DevelopmentConfig,
        "production": ProductionConfig
    }

    @staticmethod
    def inicializar():
        app = Flask(__name__)

        config = (
            ConfigurationManager.CONFIGS[environ.get("FLASK_ENV")] or
            ConfigurationManager.CONFIGS["development"]
        )
        app.config.from_object(config)

        CORS(app)

        ConfiguradorDB.inicializar(config)

        return app
