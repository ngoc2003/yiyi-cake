import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../../config/firebase.config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Alert } from "react-native";
import { ProductType } from "../../types";
import { omit } from "lodash";

export interface CartProductType {
  id: string;
  product: ProductType;
  userId: string;
  // productId: string;
  sizeId: string;
  toppingId: string;
  giftId: string;
  quantity: number;
  note: string;
}

interface AddCartType {
  userId: string;
  product: ProductType;
  quantity: number;
  sizeId: string;
  toppingId: string;
  giftId: string;
  note: string;
}

interface UpdateCartPayload {
  id: string;
  data: CartProductType;
}

interface DeleteCartPayload {
  id: string;
}

export interface CartState {
  products: CartProductType[];
}

const initialState: CartState = {
  products: [],
};

export const addCartActions = createAsyncThunk<any, AddCartType>(
  "cart/add",
  async (body, { dispatch }) => {
    try {
      const {
        userId,
        product: { id: productId },
        sizeId,
        toppingId,
        giftId,
      } = body;
      const cartProduct = await addDoc(collection(db, "cartProducts"), {
        note: body.note,
        quantity: body.quantity,
        user: doc(db, "users", userId),
        product: doc(db, "products", productId),
        size: doc(db, "sizes", sizeId),
        topping: doc(db, "toppings", toppingId),
        gift: doc(db, "gifts", giftId),
        status: "pending",
      });

      console.log("OK");

      if (cartProduct?.id) {
        const size = await getDoc(doc(db, "sizes", sizeId));
        const topping = await getDoc(doc(db, "toppings", toppingId));
        const gift = await getDoc(doc(db, "gifts", giftId));

        console.log("SIZE DATA NE ~ ", size.data());
        Alert.alert("Thanh cong");
        dispatch(
          cartSlice.actions.add({
            id: cartProduct.id,
            size: {
              id: size.id,
              ...size.data,
            },
            topping: {
              id: topping.id,
              ...topping.data,
            },
            gift: {
              id: gift.id,
              ...gift.data,
            },
            product: {
              ...omit(body.product, ["category"]),
            },
            note: body.note,
            quantity: body.quantity,
          })
        );
      }
    } catch (err) {
      console.log(err);
      Alert.alert("NOT OK");
    }
  }
);

export const getCartList = createAsyncThunk<void, { userId: string }>(
  "cart/index",
  async (body, { dispatch }) => {
    try {
      const userIdRef = doc(db, "users", body.userId);

      const cartProduct = await getDocs(
        query(
          collection(db, "cartProducts"),
          where("user", "==", userIdRef),
          where("status", "==", "pending")
        )
      );

      console.log(cartProduct.size);

      cartProduct.docs.forEach(async (item) => {
        const product = await getDoc(item.data().product);
        const size = await getDoc(item.data().size);
        const topping = await getDoc(item.data().topping);
        const gift = await getDoc(item.data().gift);

        dispatch(
          cartSlice.actions.add({
            ...omit(item.data(), "user"),
            id: item.id,
            size: {
              id: size.id,
              ...size.data,
            },
            topping: {
              id: topping.id,
              ...topping.data,
            },
            gift: {
              id: gift.id,
              ...gift.data,
            },
            product: {
              id: product.id,
              ...omit(product.data(), ["category"]),
            },
          })
        );
      });
    } catch (err) {
      Alert.alert("Loi ne");
      console.log(err);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartProductType>) => {
      state.products = [...state.products, action.payload];
    },
    update: (state, action: PayloadAction<UpdateCartPayload>) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      state.products[index] = action.payload.data;
    },
    delete: (state, action: PayloadAction<DeleteCartPayload>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;

export const { caseReducers } = cartSlice;
