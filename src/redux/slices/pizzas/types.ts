export enum EStatus {
    LOADED = "loaded",
    LOADING = "loading",
    ERROR = "error"
}
export interface IItem {
    cart: number;
    category: number;
    id: number;
    thickness: Array<IThickness>;
    diameter: Array<IThickness>;
    image: string;
    price: number;
    title: string
}

export interface IThickness {
    title: number,
    disabled: boolean
}

export interface IFetchParams {
    category: number,
    search: string,
    currentPage: number,
    elementsPerPage: number,
    link: string
} 

export interface IPizzasProps {
    items: Array<IItem> | null,
    status: EStatus
}