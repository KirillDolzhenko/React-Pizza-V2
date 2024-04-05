export interface ICartItem {
    id: number;
    title: string,
    image: string,
    price: number,
    diameter: number,
    thickness: number,
    count: number
  }
  
 export interface ICartProps {
    items: ICartItem[],
    totalPrice: number
  }