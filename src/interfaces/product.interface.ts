export interface IProduct {
    id: number;
    title: string;
    oldPrice: number;
    currentPrice: number;
    shortDesc: string;
    inStock: boolean;
    LongDesc: string;
    addInfo: string;
    frontImg: {
        url: string;
        formats?: any;
    };
    detailsImg: {
        url: string;
    };
    slug: string;
    reviews: string;
    category: string;
    onSell: boolean;
    outOfStock: boolean;
    hot: boolean;
    quantity: number;
    isForPrize: boolean;
    isForPromotion: boolean;
}
