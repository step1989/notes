# Записки

#### [Новые возможности в NodeJS 18](./nodejs18-features/index.md)
#### [Книги](./books/Readme.md)

```mermaid
%%{init: 
{
  "theme": "default",
  "themeVariables": {
    "nodeBorder" : "#004990",
    "mainBkg" : "#c9d7e4",
    "actorBkg" : "#01A6F0",
    "signalColor" : "#F34F1C",
    "textColor" : "#747474",
    "loopTextColor" : "#C7C7C7",
    "labelTextColor" : "#C7C7C7",
    "labelBoxBorderColor" : "#7FBC00",
    "labelBoxBkgColor" : "#7FBC00",
    "noteBkgColor" : "#FFBA01",
    "noteBorderColor": "#FFBA01",
    "fontFamily": "Inter",
    "fontSize": "13px"
 }
}
}%%
sequenceDiagram
    autonumber
    participant FE
    participant BFF
    participant H as Handlers
    participant DS as Data Storage

    FE->>BFF: POST<br/>/v1/containers/{id}/empty
    note over BFF: Проверка токена
    alt токен валиден?
        BFF--xFE: 401, INVALID_TOKEN
    else локация разрешена для пользователя?
        BFF--xFE: 403, INVALID_USER_LOCATION_ID
    end
    note over BFF: Проверка прав пользователя
    alt нет доступа к ресурсу?
        BFF--xFE: 403, INVALID_GRANTS
    end
    activate BFF
```
