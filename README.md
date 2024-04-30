### Инструкция по сборке React-приложения

#### Шаг 1: Установка Node.js и npm

1. Перейдите на [официальный сайт Node.js](https://nodejs.org/).
2. Скачайте и установите последнюю версию Node.js для вашей операционной системы.
3. После установки проверьте корректность установки, запустив в терминале команду:
   ```
   node -v
   npm -v
   ```

#### Шаг 2: Клонирование репозитория

1. Склонируйте репозиторий с готовым React-приложением на свой компьютер.

#### Шаг 3: Получение API ключа для Web3Form

1. Перейдите на [сайт Web3Form](https://web3form.org/).
2. Сгенерируйте API ключ.
3. Скопируйте полученный ключ.

#### Шаг 4: Настройка переменных окружения

1. В корне проекта создайте файл `.env`.
2. Внесите необходимые переменные окружения:
   ```
   REACT_APP_SITE_DOMAIN=your_site_domain
   REACT_APP_STORE_DOMAIN=your_store_domain
   REACT_APP_PUBLIC_ACCESS_KEY=your_web3form_api_key
   ```

#### Шаг 5: Открытие проекта в Visual Studio Code и запуск установки зависимостей

1. Откройте Visual Studio Code.
2. Откройте терминал в Visual Studio Code, выбрав в меню `Terminal -> New Terminal`.
3. Перейдите в каталог склонированного репозитория.
4. Выполните команду:
   ```
   npm install
   ```

#### Шаг 6: Запуск приложения для предварительного просмотра

1. Для просмотра результата приложения запустите его, выполнив команду:
   ```
   npm start
   ```
2. Откройте браузер и перейдите по адресу [http://localhost:3000](http://localhost:3000), чтобы увидеть ваше React-приложение в действии.

#### Шаг 7: Создание сборки

1. После того как вы оцените результаты работы приложения, для создания финальной сборки выполните команду:
   ```
   npm run build
   ```

#### Шаг 8: Доступ к статическим файлам

1. После успешной сборки проекта, вы найдете статические файлы в каталоге `build`.

#### Примечание:

- Файл `data.js`, содержащий данные вашего сайта, должен быть включен в репозиторий. Обновленные данные могут быть внесены непосредственно в этот файл.
- Обязательно убедитесь, что `.env` файл содержит корректные значения для переменных окружения.
- Если вы планируете разместить ваш сайт не в корневой папке домена, укажите соответствующий путь в поле `"homepage"` в файле `package.json`.

