# API - Serverless Framework Node

Servicio serverless que consume SWAPI

**Requerimientos**
* Servicio de obtener todos los planetas.
* Servicio de obtener el planeta por id.
* Servicio de crear un planeta en base a su id de SWAPI.
* Servicio de actualizar un planeta.
* Servicio de eliminar un planeta.

**Servicios adcionales**
* Servicio para crear un usuario.
* Servicio para listar todos los usuario.
* Servicio para listar un usuario por id.


### Desarrollo

Instalar dependencias:

```
npm install || npm i
```

antes de hacer el deploy se debe configurar los campos del API-Gateway

```
  restApiId: xxxxxx
  restApiRootResourceId: xxxxxx
```

entonces, para hacer el deploy:

```
npm run build && npm run deploy
```

### Local

Para levantar los servicios en un ambiente local:

```bash
npm run build && npm run dev
```

### Testing

Para ejecutar los test:

```bash
npm run test
```

### Documentacion

Disponible en el siguiente enlace:
[Swagger]: https://app.swaggerhub.com/apis/pr-andres/services-swapi/1.0.0

