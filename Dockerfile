# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

# Defina o ambiente para desenvolvimento por padrão
ENV NODE_ENV development

WORKDIR /usr/src/app

# Copie os arquivos de dependências e instale todas as dependências
COPY package*.json ./

RUN yarn install --frozen-lockfile

# Copie o restante dos arquivos da aplicação
COPY . .


# Exponha a porta que a aplicação usa
EXPOSE 3000

# Execute a aplicação
CMD ["npm", "run", "dev"]
