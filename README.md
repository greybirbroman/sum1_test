<h1 align='center'> Sum1 Auth</h1>

![react](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React&logoColor=#61DAFB)
![redux](https://img.shields.io/badge/redux-black?style=for-the-badge&logo=redux&logoColor=#06b6d4)
![react router dom](https://img.shields.io/badge/router_dom_v6-black?style=for-the-badge&logo=react-router&logoColor=#06b6d4)
![tailwind](https://img.shields.io/badge/tailwind-black?style=for-the-badge&logo=tailwindcss&logoColor=#06b6d4)
![framer](https://img.shields.io/badge/framer_motion-black?style=for-the-badge&logo=framer&logoColor=#06b6d4)

Deploy [Vercel](https://sum1-test.vercel.app/)


<img src='./readme_screen.png' width='700px'/>

## Запуск проекта 
1) Установить зависимости

```bash
npm install
```
2) Запустить проект в режиме разработки на [http://localhost:3000](http://localhost:3000) | Сервер запустится на [http://localhost:3001](http://localhost:3001)
```bash
npm run dev
# or
yarn dev
```

Пароль для всех тестовых пользователей: ```123456```

## Технические требования:
Реализовать приложение (SPA), которое умеет показывать следующие страницы:
- / — главная
- /login — страница ввода логина и пароля
- /registration — форма из нескольких полей, недоступна авторизованным пользователям
- /profile — страница с приветствием + имя пользователя + кнопка выхода (logout), недоступная без авторизации
- Если пароли не совпадают отображать ошибку: «Введенные пароли не совпадают»
- Если логин уже присутствует в JSON файле выдавать ошибку: «Пользователь с таким логином уже зарегистрирован»
- Если валидация формы прошла успешно — отобразить сообщение об успешной регистрации + кнопка перехода к форме логина (/login)
- Если данные не совпадают ни с одним из пользователей, то показывается сообщения:«Имя пользователя или пароль введены не верно»
- Если введены корректные данные, то перебрасывать на страницу /profile
- При обновлении страницы в браузере пользователя авторизованного пользователя не должно разлогинивать.




