export class Usuario {
    constructor(
        public nombre: string,
        public email: Date,
        public fecha_nacimiento: Date,
        public is_admin: string,
        public password: string
    ){};
}
