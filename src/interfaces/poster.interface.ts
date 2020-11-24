interface PosterObject {
    id: number;
    title: string;
    sellerName: string;
    price: number;
    description: string;
}

export type Poster = PosterObject | undefined;
