export interface Poster {
    id: number;
    title: string;
    sellerName: string;
    price: number;
    description: string;
}

export type Posters = Array<Poster | undefined>;
