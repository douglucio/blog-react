# Imagem base para o node.js com a versão LTS (14.x.x)
FROM node:18-alpine3.17 as build

# Define a pasta de trabalho da aplicação dentro do container
WORKDIR /app

# Copia os arquivos da aplicação para dentro do container
COPY . /app

# Instala as dependências da aplicação
RUN npm install

# Compila a aplicação com o Vite
RUN npm run build

# Define nginx
FROM ubuntu

# atualiza ubuntu
RUN apt-get update

#instala nginx
RUN apt-get install nginx -y

# copia build para dentro nginx
COPY --from=build /app/dist /var/www/html/

#define porta nginx
EXPOSE 80

CMD ["nginx","-g","daemon off;"]
