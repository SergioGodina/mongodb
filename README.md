logs

Estructura

    {
        "datetime": 11111,
        "current_temperature": 20,
        "current_humedity": 60,
        "adjustment_temperature": 25,
        "state": true
    }


https://mongodbutch.herokuapp.com/api/logs/post - Agrega un documento a la coleccion de logs 

https://mongodbutch.herokuapp.com/api/logs/getAll - Muestra todos los documentos de la coleccion de logs

https://mongodbutch.herokuapp.com/api/logs/getOne/id - Muestra un documento de la coleccion logs que coincida con el parametro del id

https://mongodbutch.herokuapp.com/api/logs/update/id - Actualiza un documento de la coleccion logs

https://mongodbutch.herokuapp.com/api/logs/delete/id - Elimina un documento de la coleccion de logs



users

Estructura

    {
        "username": "test",
        "password": "test",
        "rol": "Admin",
        "state": true
    }


https://mongodbutch.herokuapp.com/api/users/post - Agrega un documento a la coleccion de users

https://mongodbutch.herokuapp.com/api/users/getAll - Muestra todos los documentos de la coleccion de users

https://mongodbutch.herokuapp.com/api/users/getOne/id - Muestra un documento de la coleccion users que coincida con el parametro del id

https://mongodbutch.herokuapp.com/api/users/update/id - Actualiza un documento de la coleccion users que coincida con el parametro del id

https://mongodbutch.herokuapp.com/api/users/delete/id - Elimina un documento de la coleccion de users que coincida con el parametro del id