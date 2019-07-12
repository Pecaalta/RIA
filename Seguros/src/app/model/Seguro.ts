import { TiposDeSeguroDto } from './tiposdeseguro-dto';
import { Cliente } from './Cliente';

export interface Seguro {
    id_DeSeguro: number
    cliente: Cliente
    tipo: TiposDeSeguroDto
    fechaInicio: Date
    fechaFechaFin: Date
    titulo: string
    descripccion: string
    documentoPDFBase64?: string
    documentoPDF?: string
    costoTotal: number
}