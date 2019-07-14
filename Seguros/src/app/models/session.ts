export class Session {
    constructor(
        public email: string,
        public role: string,
        public token: string,
        public nombres: string,
        public apellidos: string
    ){};
}