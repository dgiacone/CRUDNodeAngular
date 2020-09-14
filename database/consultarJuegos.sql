use tpel;

create table ordenes (

    id int NOT NULL AUTO_INCREMENT ,
    idUsuario int,
    idLocalizacion int,
    idZona int,
    idEquipo INT,
    idTipoOrden int,
    detalleOrden varchar(200),
    detalleResolucion varchar(200),
    fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fechaLeido date,
    fechaSolucion date,
    fechaInicio date,
    fechaFin date,
    fechaUltimaModificacion date,

    primary key (id)


)
