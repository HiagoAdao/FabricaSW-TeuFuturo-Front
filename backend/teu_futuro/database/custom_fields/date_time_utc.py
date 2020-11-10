from peewee import Field
from datetime import datetime
import pytz
import tzlocal


class DateTimeUtcField(Field):
    field_type = "DATETIME"
    field_format_1 = "%Y-%m-%d %H:%M:%S.%f+00:00"
    field_format_2 = "%Y-%m-%d %H:%M:%S+00:00"

    def test_format(self, value, format):
        passed = True
        date_value = None
        try:
            date_value = datetime.strptime(
                value, format)
        except Exception as e:
            msg_error = (
                "Formato de data inválido :obtendo do banco: - "
                f"Erro: {e}"
            )
            print(msg_error)
            passed = False
        return (date_value, passed)

    def db_value(self, value):
        localized_time = None
        if value is None:
            localized_time = None
        elif value.tzinfo is None:
            localized_time = tzlocal.get_localzone().localize(value)
        else:
            localized_time = value
        return (localized_time.astimezone(pytz.utc)
                if localized_time is not None
                else None)

    def python_value(self, value):
        date_value = value
        is_valid = False
        if value is None:
            return
        if type(value) is str:
            date_value, is_valid = self.test_format(
                value,
                DateTimeUtcField.field_format_1
            )
            if not is_valid:
                date_value, is_valid = self.test_format(
                    value,
                    DateTimeUtcField.field_format_2
                )
        format_date_value = None
        if date_value is not None:
            format_date_value = pytz.utc.localize(date_value).astimezone(
                tzlocal.get_localzone()
            )
        return format_date_value
