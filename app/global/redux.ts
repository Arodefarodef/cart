import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cart: [],
};

const redux = createSlice({
  name: "users",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },

    deleteProduct: (state, { payload }) => {
      let remove = state.cart.filter((el: any) => el.id !== payload.id);
      state.cart = remove;
    },

    addProductToCart: (
      state: {
        product: never[];
        cart: { qty: 0 }[];
      },
      { payload }
    ) => {
      const check: any = state.cart.findIndex(
        (el: any) => el.id === payload.id
      );

      if (check >= 0) {
        state.cart[check].qty += 1;
        return;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
    },
    // deleteProduct: (
    //   state: {
    //     product: never[];
    //     cart: { qty: 0 }[];
    //   },
    //   { payload }
    // ) => {
    //   const check = state.cart.findIndex((el: any) => {
    //     return el.id === payload;
    //   });
    //   state.cart[check].qty -= 1;
    // },

    removeProductToCart: (state: any, { payload }: any) => {
      const check: any = state.cart.findIndex(
        (el: any) => el.id === payload.id
      );

      if (state.cart[check].qty > 1) {
        state.cart[check].qty -= 1;
      } else {
        let remove = state.cart.filter((el: any) => el.id !== payload.id);

        state.cart = remove;
      }
    },
  },
});

export const {
  addProduct,
  addProductToCart,
  removeProductToCart,
  deleteProduct,
} = redux.actions;

export default redux.reducer;
