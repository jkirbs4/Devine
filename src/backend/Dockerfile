
# Use the official Docker image for Python 3.12 with a trixie Debian 13 distribution.
FROM python:3.12.12-trixie

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_RUN_HOST=0.0.0.0

EXPOSE 5000

CMD ["flask", "run", "--debug"]
