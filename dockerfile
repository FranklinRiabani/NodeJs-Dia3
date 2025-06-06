# Dockerfile para Node.js 18
FROM node:18

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto (ajustar si tu app usa otro)
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "./src/index.js"]
