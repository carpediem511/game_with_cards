### ОСНОВНАЯ ИДЕЯ
Проект представляет собой приложение для тренировки памяти на основе составления пар изображений. Пользователь должен отыскать одинаковые изображения на карточках, запоминая их положение.

### ОСНОВНЫЕ КОМПОНЕНТЫ ПРОЕКТА
**Начальный экран: предоставляет правила игры и выбор темы изображений.
**Экран игры: отображает поле с карточками, текущую статистику игры и индикатор прогресса.
**Экран результатов: показывает таблицу с результатами игр пользователей.

### ИСПОЛЬЗУЕМЫЕ ТЕХНОЛОГИИ И БИБЛИОТЕКИ
React, TypeScript, React Router DOM, @headlessui/react, @mui/material, Tailwind CSS, uuid4, Prettier.

### ОСОБЕННОСТИ ИГРОВОГО ПРОЦЕССА
Набор карточек перемешивается при каждом старте игры, обеспечивая разнообразие и случайность.
Пользователь видит все карточки рубашками вверх, соответствующими выбранной теме.
Переворот карточек происходит кликом пользователя, который может выбирать их в произвольном порядке.
Приложение проверяет совпадение изображений на открытых карточках и соответствующим образом обрабатывает результат:
**Если изображения не совпадают, карточки переворачиваются рубашкой вверх после короткой задержки.
**Если изображения совпадают, карточки отображаются лицевой стороной и исключаются из дальнейшего участия в игре.

При выборе третьей карточки обе открытые карточки закрываются, третья карточка не открывается.
В течение игры отображается текущее количество ходов и количество собранных пар карточек.
Индикатор прогресса игры отображает долю собранных пар карточек.
Игрок получает сообщение о завершении игры, когда все карточки собраны в пары, с возможностью перехода к экрану результатов после нажатия на кнопку.

### ИНСТРУКЦИИ ПО УСТАНОВКЕ:

1. Склонируйте репозиторий на вашем компьютере.
2. Установите все зависимости, выполнив команду yarn install.
3. Запустите приложение с помощью команды yarn start.

Дата создания проекта: январь 2024 года.

Проект доступен онлайн по ссылке https://memory-game51.netlify.app благодаря публикации на платформе Netlify.

Автор: Мальвина Милаш.
Свяжитесь со мной по электронной почте vampire05@yandex.ru для вопросов и предложений.
