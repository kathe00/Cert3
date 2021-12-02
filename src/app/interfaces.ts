export interface Artista {
    nombre:string;
    desc:string;
    img:string;
}

export interface Noticia{
    titulo:string,
    bajada:string,
    contenido:string,
    destacada:boolean,
    imgHome:string, //imagen que aparece en el apartado news de Home
    imgNoticia:string, //imagen completa que aparece al leer la noticia
    imgBanner:string //imagen cuadrada para los banners de otras noticias
}

export interface Team{
    nombre:string,
    ocupacion:string,
    foto:string
}