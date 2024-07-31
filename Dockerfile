# Используйте официальный образ Node.js в качестве базового
FROM node:14

# Создайте рабочую директорию
WORKDIR /app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта
COPY . .

# Соберите проект
RUN npm run build

# Укажите команду для запуска приложения
CMD ["npm", "start"]
