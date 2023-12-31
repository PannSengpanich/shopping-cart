import { createSlice } from "@reduxjs/toolkit";
const initialProductState = {
  checkoutProduct: [
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
      quantity: 5,
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
      quantity: 4,
    },
  ],
};
const productSlice = createSlice({
  name: "checkoutProduct",
  initialState: initialProductState,
  reducers: {
    // receive current state and action as first and second parameter

    addToCart(state, action) {
      // Find the index of the product with the matching id
      const productIndex = state.checkoutProduct.findIndex(
        (product) => product.id === action.payload.id,
      );

      if (productIndex >= 0) {
        // If the product is found, increase its quantity by the payload quantity
        state.checkoutProduct[productIndex].quantity += action.payload.quantity;
        console.log("increase quantity");
      } else {
        // If the product is not found, add it to the checkoutProduct array
        state.checkoutProduct = [action.payload, ...state.checkoutProduct];
        console.log("include new product");
      }
      console.log(state.checkoutProduct);
    },
    add(state, action) {
      const productIndex = state.checkoutProduct.findIndex(
        (product) => product.id === action.payload.id,
      );

      state.checkoutProduct[productIndex].quantity += 1;
    },
    remove(state, action) {
      const productIndex = state.checkoutProduct.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (state.checkoutProduct[productIndex].quantity > 1) {
        state.checkoutProduct[productIndex].quantity -= 1;
      } else {
        state.checkoutProduct.splice(productIndex, 1);
      }
    },
    delete(state, action) {
      const productIndex = state.checkoutProduct.findIndex(
        (product) => product.id === action.payload.id,
      );
      state.checkoutProduct.splice(productIndex, 1);
    },
    typeQuantity(state, action) {
      const productIndex = state.checkoutProduct.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (action.payload.quantity == 0) {
        state.checkoutProduct.splice(productIndex, 1);
      } else {
        state.checkoutProduct[productIndex].quantity = action.payload.quantity;
      }
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice.reducer;
