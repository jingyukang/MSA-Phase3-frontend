import axios, { AxiosError, AxiosResponse } from "axios";
import { IItem, IItemCreatePayload, IItemUpdatePayload } from "../../model";

const url = "https://msa3backendjin-wa.azurewebsites.net";
const headers = {
  "Access-Control-Allow-Origin": "*",
};

export const fetchItems = (): Promise<Array<IItem>> => {
  return new Promise<Array<IItem>>((resolve, reject) =>
    axios
      .get<Array<IItem>>(url + "/api/Storage?_sort=itemName&_order=asc", {
        headers: headers,
      })
      .then((res: AxiosResponse) => res.data)
      .then((items: Array<IItem>) => resolve(items))
      .catch((error: AxiosError) => reject(error))
  );
};

export const createItem = (item: IItemCreatePayload): Promise<IItem> => {
  return new Promise<IItem>((resolve, reject) =>
    axios
      .post<IItem>(url + "/api/Storage", item, {
        headers: headers,
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: IItem) => resolve(data))
      .catch((error: AxiosError) => reject(error))
  );
};

export const deleteItem = (id: string): Promise<any> => {
  return new Promise<IItem>((resolve, reject) =>
    axios
      .delete<IItem>(url + `/api/Storage/${id}`, {
        headers: headers,
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: IItem) => resolve(data))
      .catch((error: AxiosError) => reject(error))
  );
};

export const updateItem = (item: IItemUpdatePayload): Promise<IItem> => {
  return new Promise<IItem>((resolve, reject) =>
    axios
      .put<IItem>(url + "/api/Storage", item, {
        headers: headers,
      })
      .then((res: AxiosResponse) => res.data)
      .then((data: IItem) => resolve(data))
      .catch((error: AxiosError) => reject(error))
  );
};
