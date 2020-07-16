FROM python:3.7.3-alpine3.9

RUN apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev \
    && apk add postgresql-dev

WORKDIR /workspace
COPY ./requirements.txt /workspace/requirements.txt

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
