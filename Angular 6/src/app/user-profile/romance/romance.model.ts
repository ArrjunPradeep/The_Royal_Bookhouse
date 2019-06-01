export class IProduct{
    constructor(
        public productId: number,
        public productName: string,
        public productGenre : string,
        public productAuthor : string,
        public productPrice : number,
        public productImage : string
        ){}
}