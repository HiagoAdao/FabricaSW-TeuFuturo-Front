from flask import jsonify, make_response


class Responses:
    @staticmethod
    def __make_success(data):
        return jsonify(dict(status='success', data=data))

    @staticmethod
    def __make_error(message):
        return jsonify(dict(status='error', message=message))

    @staticmethod
    def success(data=None):
        response = Responses.__make_success(data)
        return make_response(response, 200)

    @staticmethod
    def created(data=None):
        response = Responses.__make_success(data)
        return make_response(response, 201)

    @staticmethod
    def bad_request(message):
        response = Responses.__make_error(message)
        return make_response(response, 400)

    @staticmethod
    def server_error(message):
        response = Responses.__make_error(message)
        return make_response(response, 500)
