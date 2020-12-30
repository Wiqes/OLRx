export class Poster {
    id = '';
    title = '';
    isInShoppingCart = false;
    sellerName = '';
    price = 0;
    description = '';
    creator: string;
    photo?: string;

    constructor(data: any) {
        this.id = data._id;
        this.title = data.title;
        this.isInShoppingCart = Boolean(data.isInShoppingCart);
        this.sellerName = data.sellerName;
        this.price = Number(data.price);
        this.description = data.description;
        this.creator = data.creator;
        this.photo = data.photo;
    }
}

export type Posters = Array<Poster | undefined>;
