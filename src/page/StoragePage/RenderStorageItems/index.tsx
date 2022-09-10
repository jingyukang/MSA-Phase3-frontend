import React, { ReactNode, useState } from "react";
import { IItem, IItemUpdatePayload } from "../../../model";
import { useAppDispatch } from "../../../app/hooks";
import {
  deleteItemAsync,
  getItemsAsync,
  updateItemAsync,
} from "../../../slice/items";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Input from "@mui/material/Input";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

interface storageItemProps {
  item: IItem;
}

const RenderStorageItems = ({ item }: storageItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const [updateName, setUpdateName] = useState<string | undefined>();
  const [updateDescription, setUpdateDescription] = useState<
    string | undefined
  >();
  const [updatePrice, setUpdatePrice] = useState<number | undefined>();
  const [updateTotalQuantity, setUpdateTotalQuantity] = useState<
    number | undefined
  >();
  const [updateQuantity, setUpdateQuantity] = useState<number | undefined>();

  const deleteItemButton = () => {
    dispatch(deleteItemAsync(item.id));
    dispatch(getItemsAsync());
  };

  const updateItemButton = (): void => {
    const payload: IItemUpdatePayload = {
      ...item,
      itemName: !updateName ? item.itemName : updateName,
      itemDescription: !updateDescription
        ? item.itemDescription
        : updateDescription,
      price: !updatePrice ? item.price : updatePrice,
      quantity: !updateTotalQuantity ? item.quantity : updateTotalQuantity,
    };

    Number(updatePrice) < 0 || Number(updateTotalQuantity) < 0
      ? alert("Invalid number")
      : !updateName && !updatePrice && !updateTotalQuantity
      ? alert("Edit something")
      : dispatch(updateItemAsync(payload));
  };

  const updatePlus = (): void => {
    const payload: IItemUpdatePayload = {
      ...item,
      quantity: !updateQuantity
        ? item.quantity
        : item.quantity + updateQuantity,
    };
    Number(updateQuantity) < 0
      ? alert("Invalid number")
      : dispatch(updateItemAsync(payload));
  };
  const updateMinus = (): void => {
    const payload: IItemUpdatePayload = {
      ...item,
      quantity: !updateQuantity
        ? item.quantity
        : item.quantity - updateQuantity,
    };
    Number(updateQuantity) < 0 || Number(updateQuantity) > item.quantity
      ? alert("Invalid number")
      : dispatch(updateItemAsync(payload));
  };

  return (
    <TableBody>
      <TableRow>
        <TableCell>
          {`${item.itemDescription
            .charAt(0)
            .toUpperCase()}${item.itemDescription.slice(1)} ${item.itemName
            .charAt(0)
            .toUpperCase()}${item.itemName.slice(1)}`}
        </TableCell>
        <TableCell>$ {item.price}</TableCell>
        <TableCell>{item.quantity}</TableCell>
        <TableCell>
          <Button
            size="small"
            variant="outlined"
            startIcon={<DeleteOutlineIcon />}
            onClick={deleteItemButton}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Input
            type="text"
            placeholder="Item name change"
            onChange={(e) => {
              setUpdateName(e.target.value);
            }}
          />
        </TableCell>
        <TableCell>
          <Input
            type="number"
            placeholder="Number of Price"
            onChange={(e) => {
              setUpdatePrice(Number(e.target.value));
            }}
          />
        </TableCell>
        <TableCell>
          <Input
            type="number"
            placeholder="Total Quantity Change"
            onChange={(e) => {
              setUpdateTotalQuantity(Number(e.target.value));
            }}
          />
        </TableCell>
        <TableCell>
          <Button
            size="small"
            startIcon={<SendOutlinedIcon />}
            variant="outlined"
            color="secondary"
            onClick={updateItemButton}
          >
            Update
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell>
          <Input
            type="number"
            placeholder={`Num for '${item.itemName}'`}
            onChange={(e) => {
              setUpdateQuantity(Number(e.target.value));
            }}
          />
        </TableCell>
        <TableCell>
          <Button variant="outlined" size="small" onClick={updatePlus}>
            +
          </Button>
          <Button
            color="error"
            variant="outlined"
            size="small"
            onClick={updateMinus}
          >
            -
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default RenderStorageItems;
