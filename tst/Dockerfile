
FROM python:3.12-slim AS runner

# Install Node.js 20 (Debian-based)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl ca-certificates gnupg \
  && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y --no-install-recommends nodejs \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /test

# Handle Requirements (better caching)
COPY tst/requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# ---- Frontend deps (better caching) ----
COPY src/frontend/package*.json src/frontend/
RUN cd src/frontend && npm ci

# Copy Frontend & Backend
COPY src/frontend ./src/frontend
COPY src/backend ./src/backend

# Copy Test Suite
COPY tst ./tst

CMD ["sh"]
