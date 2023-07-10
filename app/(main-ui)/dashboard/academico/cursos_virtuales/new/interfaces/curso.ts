export default interface curso
{
    step:number,
    nombreDelCurso:string,
    modalidad:'envivo'|'grabado'|'texto'|'',
    nivel:'basico'|'intermedio'|'avanzado'|'',
    categorias:string,
    subtitulo:string,
    descripcionDelCurso:string,
    tipoDescuento:''|'fixed'|'porcentaje'
    quienesDebenParticipar:string,
    queAprendere:string,
    marcarComoPrivado:boolean,
    cursoEsGratuito:boolean,
    descuento:boolean,
    destacado:boolean,
    vistaPrevia:boolean,
    pagoRequerido:boolean,
    precioDeCurso:string,
    descuentoPrecio:string,
    categoriaDeCurso:Array<string>,
    fechaDeInicioDelCurso:string,
    fechaDeFinalizacionDelCurso:string,
    cierreDeinscripciones:Array<string>,
    instructoresDelCurso:Array<string>,
    activarVideoEnLandingPage:boolean,
    seleccionarVideoParaLanding:string,
    codigoDeVideoUrl:string,
    cardsPaginaPrincipal:string,
    fondoParaLandingPage:string,
    iconoDelCurso:string,
    bannerPromocional:string,
    responsablesMarketing:Array<string>,
    responsablesAsesoria:Array<string>,
    meta:Array<string>,
    metaDescripcion:string,
    metaImagen:string
}