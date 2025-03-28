# Etapa 1: Construcción de la aplicación
FROM node:18 AS builder

# Definir el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos necesarios
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Construir la aplicación Next.js
RUN npm run build

# Etapa 2: Imagen para producción
FROM node:18

WORKDIR /app

# Copiar los archivos generados en la etapa de construcción
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación en modo producción
CMD ["npm", "run", "start"]
