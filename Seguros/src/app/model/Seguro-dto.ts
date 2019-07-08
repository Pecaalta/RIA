export interface SeguroDto {
    id_DeSeguro?: number
    id_Cliente: number
    id_Tipo: number
    fechaInicio: Date
    fechaFechaFin: Date
    titulo: string
    descripccion: string
    documentoPDFBase64: string
    costoTotal: number
}