import type {Product} from "$lib/common/product";

export const products: Product[] = [
    {
        id: 1,
        title: "Honig",
        shortDescription: "Echter walliser honig",
        thumbnail: "/images/products/honig.jpg",
        inShowroom: true,
    },
    {
        id: 2,
        title: "Handcreme",
        shortDescription: "Diese Wunderschöne Handcreme",
        thumbnail: "/images/products/handcreme.jpg",
        inShowroom: true,
    },
    {
        id: 3,
        title: "Lippenstift",
        shortDescription: "Super duper Lippenstift",
        thumbnail: "/images/products/lippenstift.webp",
        inShowroom: false,
    },
    {
        id: 4,
        title: "Wachstücher",
        shortDescription: "Schöne Wachstücher",
        thumbnail: "/images/products/wachstucher.jpg",
        inShowroom: true,
    }
];