
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '4aae46e3e26b4c13be00d477e06c2bfc';
const API_URL = `https://newsapi.org/v2/everything`;


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY,
  },
});



export const fetchNewsData = createAsyncThunk(
  'news/fetchNewsData',
  async ({ page, category }) => {
    const response = await axios.get(API_URL, {
      params: {
        q: category || 'tesla', // Default to 'tesla' if category is not provided
        from: '2024-06-18',
        to: '2024-06-18',
        sortBy: 'popularity',
        pageSize: 10,
        page,
        apiKey: API_KEY,
      },
    });
    return response.data;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    page: 1,
    totalResults: 0,
    category: 'tesla', // Default category
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1; // Reset to first page when category changes
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.articles;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setPage, setCategory } = newsSlice.actions;

export default newsSlice.reducer;
