export interface IItem {
  id: string;
  itemName: string;
  itemDescription: string;
  price: number;
  quantity: number;
}

export interface IItemCreatePayload {
  itemName: string;
  itemDescription: string;
  price: number;
  quantity: number;
}

export interface IItemUpdatePayload {
  id: string;
  itemName?: string;
  itemDescription?: string;
  price?: number;
  quantity?: number;
}
