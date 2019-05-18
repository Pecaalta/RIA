export class Seguro {    
    constructor(
        public cliente: string,
        public fecha_inicio: Date,
        public fecha_fin: Date,
        public descripción: string,
        public documento: string,
        public tipo: string,
        public total: string,
    ){};
}
