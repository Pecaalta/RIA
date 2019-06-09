import { PersonaContactoDto } from './persona-contacto-dto';

export class PersonaDto {
    id_Persona?: number
    primerNombre: string
    segundoNombre?: string
    primerApellido: string
    segundoApellido?: string
    fechaNacimiento: Date
    documento?: string
    tipoDocumento?:string
    contactos?: PersonaContactoDto[]
}
