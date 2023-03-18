import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { ProductService } from '../../services/ProductService';
import { RootState, AppThunk } from '../store';

export interface ProductState {
  data: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  data: [],
  loading: false
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const data = await ProductService.getAllProduct();
    return data;
  }
);

export const addProductAsync = createAsyncThunk(
  'product/addProducts',
  async (product: Product) => {
    const response = await ProductService.addProduct(product);
    return response;
  }
);

export const updateProductAsync = createAsyncThunk(
  'product/updateProducts',
  async (product: Product) => {
    const response = await ProductService.updateProduct(product.id, product);
    return response;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'product/deleteProducts',
  async (productId: number) => {
    const response = await ProductService.deleteProduct(productId);
    return response;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    //FETCH
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        alert('Deu erro bino');
        state.loading = false;
      })
      //SALVAR
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.data = [ ...state.data, action.payload];
        state.loading = false;
      })
      .addCase(addProductAsync.rejected, (state) => {
        alert('Deu erro ao adicionar bino');
        state.loading = false;
      })
      //UPDATE
      .addCase(updateProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.data = [ ...state.data.map(p => {
          if(p.id == action.payload.id) return action.payload
          return p;
        }) ];
        state.loading = false;
      })
      .addCase(updateProductAsync.rejected, (state) => {
        alert('Deu erro ao atualizar bino');
        state.loading = false;
      })
      //DELETE
      .addCase(deleteProductAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.data = [ ...state.data.filter(p => {
          return p.id !== action.payload.id
        }) ];
        state.loading = false;
      })
      .addCase(deleteProductAsync.rejected, (state) => {
        alert('Deu erro ao apagar bino');
        state.loading = false;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;
export const selectProducts = (state: RootState) => state.product.data;
export const selectLoading = (state: RootState) => state.product.loading;
export const getProductById = (state: RootState, id: string | undefined) => state.product.data.find(d=>d.id.toString() == id);
export default productSlice.reducer;