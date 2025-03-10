# slonit-practice

## [Черменина Екатерина](https://github.com/KatjaEC)

### Git commands 

| ***Команда***        | ***Действие*** |
| ---------------------| ---------|
| *git init*           | инициализирует новый репозиторий Git в текущей папке |
| *git add .*          | переносит внесенные изменения в раздел проиндексированных файлов |
| *git commit -m*      | фиксирует изменения в репозитории; -m "" - это комментарий       |
| *git push*           | отправляет локальную ветку с компьютера на удаленный репозиторий | 
| *git clone <ссылка>* | создание копии репозитория, который находится по ссылке |
| *git branch*         | создание, просмотр, переименование и удаление ветки, без дополнительных команд просто выводит список веток |
| *git branch <имя новой ветки>*| создание новой ветки |
| *git branch -d <имя удаляемой ветки>* | удаление ветки |
| *git branch -m <имя ветки>* | переименование ветки |
| *git checkout <имя ветки>* | переключение на указанную ветку |
| *git --help* | выводит список основных команд Git |
| *git status* | показывает текущий статус проекта и его коммитов |
| *git pull* | подтягивает изменения из удаленного репозитория и сохраняет их в локальный (т.е. git fetch + git merge) |
| *git fetch* | просто скачивает с удаленного репозитория его текущее состояние, не меняя локальное состояние файлов |
| *git merge* | слияние изменений удаленного и локального репозиториев |

### Изображения

![Логотипы git и github](https://robsonsousa.com/wp-content/uploads/2023/03/git.png)

### Ссылки

#### Обычные

[Ссылка на репозиторий](https://github.com/KatjaEC/slonit-practice)

#### Внутренние

[Перейти к Функциям](#functions)

#### Автоматические

<https://github.com/KatjaEC?tab=repositories>

### Списки

#### Нумерованный

1. Переменные
2. Типы данных
3. Сравнение

#### Маркированный

- if...else 
- Логические операторы

#### Вложенные

1. Циклы while и for
    - while
    - for
2. Функции
    - Классические функции
    - Стрелочные функции

### <a id="functions">Функции</a>

```
const greeting = (name) => {
    console.log(`Hello, ${name}!`);
};

greeting('Stranger');

```

```javascript
const response = () => {
    console.log('Hello to you too!');
};

response();

```