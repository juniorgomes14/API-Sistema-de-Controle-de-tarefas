# Use uma imagem base do Node.js
FROM node:14

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos do projeto para o contêiner
COPY package*.json ./
RUN npm install
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]