import React, { FormEvent, useState } from "react";
import { IItem, IItemCreatePayload } from "../../model/Item";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { createItemAsync, selectAllItems } from "../../slice/items";
import { Button, Input } from "@mui/material";
import RenderStorageItems from "./RenderStorageItems";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

const StoragePage = (): JSX.Element => {
  const allItems: Array<IItem> = useAppSelector(selectAllItems);
  const dispatch = useAppDispatch();

  const [item, setItem] = useState<string>("");
  const [itemDescription, setItemDescription] = useState<string>("");
  const [itemPrice, setItemPrice] = useState<number>(0);
  const [itemQuantity, setItemQuantity] = useState<number>(0);

  const addItemButton = (e: FormEvent): void => {
    e.preventDefault();
    const newItem: IItemCreatePayload = {
      itemName: item,
      itemDescription: itemDescription,
      price: itemPrice,
      quantity: itemQuantity,
    };

    !allItems.find((i) => i.itemName === newItem.itemName)
      ? dispatch(createItemAsync(newItem))
      : alert("The Item is already on the List");
  };

  return (
    <div>
      <div>
        <h1>Storage</h1>
      </div>

      <form>
        <div>
          <Input
            placeholder="Item Name"
            type="text"
            name="item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <Input
            placeholder="Item Description"
            type="text"
            name="description"
            onChange={(e) => {
              setItemDescription(e.target.value);
            }}
          />
          <Input
            placeholder="Number of Price"
            type="number"
            name="price"
            onChange={(e) => {
              setItemPrice(Number(e.target.value));
            }}
          />
          <Input
            placeholder="Number of Quantity"
            type="number"
            name="quantity"
            onChange={(e) => {
              setItemQuantity(Number(e.target.value));
            }}
          />
          <Button size="small" variant="contained" onClick={addItemButton}>
            Add Item
          </Button>
        </div>
      </form>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h3>Item</h3>
            </TableCell>
            <TableCell>
              <h3>Price</h3>
            </TableCell>
            <TableCell>
              <h3>Quantity</h3>
            </TableCell>
            <TableCell>
              <h3>Action</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        {allItems.map((item) => (
          <RenderStorageItems key={item.id} item={item} />
        ))}
      </Table>
    </div>
  );
};

export default StoragePage;