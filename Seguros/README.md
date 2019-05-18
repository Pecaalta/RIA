# Seguros

## Letra


Dentro de la parte privada, se tendrá las siguientes funcionalidades:
- USER
    - Mis seguros activos
        Mostrará la lista de seguros contratados que están activos ordenados por fecha de vencimiento y marcando distintivamente aquellos que están por vencer.
    - Ver mis seguros vencidos 
        Colocando un rango de fechas (Por defecto los últimos 3 años) podrá ver los seguros que se encuentran vencidos.
    - Realizar consultas 
        Ingresando un teléfono de contacto y la consulta el usuario podrá dejar registrada una consulta para los administr
        Si la consulta puede ser respondida por el administrador.
        Tanto cuando la consulta es vista por el administrador la misma es marcada como vista y cuando la respuesta es vista por el usuario, la misma es marcada como vista.
        En tales casos cuando los mensajes están sin ver se muestran de manera distinta a los usuarios.
    - El administrador, además de responder las preguntas puede agregar noticias que serán visibles en la portada del sitio. 
        Cada noticia tiene:
            ○ Título
            ○ Descripción
            ○ Foto Asociada
            ○ Fecha de Caducidad
- Por otra parte se brindará una api para obtener las noticias vigentes a mostrar en la portada del sitio.
- El administrador, por otra parte puede asociar los seguros a cada cliente, un seguro consta de:
    ○ Cliente
    ○ Fecha Inicio
    ○ Fecha Fin
    ○ Descripción
    ○ Documento PDF
    ○ Tipo de Seguro
    ○ Costo Total
- El administrador puede mantener además los tipos de seguro vigentes, los tipos de seguro pueden ser por
    ejemplo: Hogar, Automotor, etc..
    - Cada tipo de seguro tiene un nombre y un color Asociado.
- En el perfil del usuario, cuando se muestran los seguros activos, se deben distinguir los mismos según su tipo por alguna marca con el color asociado al tipo.
    
Entrega final:
    - Archivo comprimido que contenga:
        ○ La carpeta del proyecto (sin la carpeta node_modules), es decir el proyecto limpio.
        ○ Un mini video demostrativo.
        ○ Un documento final donde se exprese:
    ■ Evaluación de Angular con respecto a las tecnologías tradicionales para el desarrollo web.
    ■ Evaluación del framework css que les fue asignado al grupo.


## Secciones
- Inicio (noticias)
    - Noticias
- Quienes Somos
    - Nosotros
- Que servicios brindamos
    - Servicios
- Contactos
    - Contactos
- Servicios en línea (parte privada con autenticación)
    - Login
        - Login
    - Registro de Usuario
        - Registro
- Admin
    - Agregar noticia
        - AgregarNoticia
    - Asignar seguro
        - ClientesListado
        - AsiganrSeguro
    - Consultar
        - ConsultarListado
        - ConsultarVer : a contestar
- User
    - Consultar
        - consultaUsuario
    - Mis seguros vensidos
        - SegurosVensidos : rango de fecha 3 años defaultr
    - Mis seguros activos
        - SegurosActivos : ordenado fecha, marcados por vencer
---
## Ficheros
- Modelos
    - Noticias
        - Título
        - Descripción
        - Foto Asociada
        - Fecha de Caducidad
    - Consulta
        - telefono
        - consulta
        - Cliente
        - Consulta a responder
    - Seguro
        - Cliente
        - Fecha Inicio
        - Fecha Fin
        - Descripción
        - Documento PDF
        - Tipo de Seguro
        - Costo Total
    - Tipo de seguro
        - Nombre 
        - Color
    - Usuario
        - Nombre
        - Password
- Guads
    - Autentificado
- Paginas
    - Main
    - NavPublica
        Nav var solo con opciones publicas
    - NavPrivada
        Nav var con opciones privadas
    - Noticias
        Listado de noticias creadas por el administrador sin autentificacion
    - Nosotros
        Informacion del local
    - Servicios
        Listado de servicios
    - Contactos
        Manda informacion de contacanos
    - Login
        Formulario de login
    - Registro
        Formulario de registro
    - AgregarNoticia
        Formulario agregar noticia
    - ConsultarListado
        Listado para admin de las noticias
    - ConsultarVer
        Vista de la consulta para el admin
    - consultaCliente
        Pajina para que el clinte aga la pregunta
    - listaCliente
        Listado de clientes a los q asignar un seguro.
    - SegurosAsignado
        Formulario.

    - SegurosVensidos
        Listado de seguros vencidos listado por defecto limitados a 3 años
    - SegurosActivos
        Listado de seguros activos marcar por vencer
- Servicios
    - Seguros
        - seguros_asignar
        - seguros_activos
        - seguros_venciods
        - mandar_consulta
    - Noticias
        - lista
        - crea
    - Usuarios
        - registro
        - login
        - isAdmin
        - isCliente
        - isLogeado
        - logout
        - getSession
        - setSession
- Contantes
    - URLAPI
    - MINAVISOVENCIMINTO
- Asset
    - Logo

---
## RUTAS
- noticias (Publica)
- nosotros (Publica)
- servicios (Publica)
- contactos (Publica)
- login (Publica)
- registro (Publica)
- liea (Administrador/Cliente)
    - noticia (Administrador)
        - lista (Administrador)
        - edita (Administrador)
        - crea (Administrador)
    - consulta (Administrador/Cliente)
        - lista (Administrador)
        - responder (Administrador)
        - crear (Cliente)
    - seguros (Cliente)
        - vensidos (Cliente)
        - activos (Cliente)
    - cliente
        - lista (Administrador)
        - idCliente (Administrador)
    

## Componentes de ng-lightning
 - datepickers:    https://ng-lightning.github.io/ng-lightning/#/components/datepickers
 - Datatables:     https://ng-lightning.github.io/ng-lightning/#/components/datatables
 - modals:         https://ng-lightning.github.io/ng-lightning/#/components/modals
 - input:          https://ng-lightning.github.io/ng-lightning/#/components/input
 - textarea:       https://ng-lightning.github.io/ng-lightning/#/components/textarea
 - prompt:         https://ng-lightning.github.io/ng-lightning/#/components/prompt
 - badges:         https://ng-lightning.github.io/ng-lightning/#/components/badges
 - button:         https://ng-lightning.github.io/ng-lightning/#/components/buttons
 - avatar:         https://ng-lightning.github.io/ng-lightning/#/components/avatar
 - alert:          https://ng-lightning.github.io/ng-lightning/#/components/alert
 - file:           https://ng-lightning.github.io/ng-lightning/#/components/files
 - spinners:       https://ng-lightning.github.io/ng-lightning/#/components/spinners