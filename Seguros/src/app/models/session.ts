export class Session {
    constructor(
        public nombre: string,
        public is_admin: Boolean,
        public token: string
    ){};
}
