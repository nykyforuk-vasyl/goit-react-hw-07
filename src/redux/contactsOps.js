import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://670ac439ac6860a6c2ca6f68.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async ({ name, number }, thunkApi) => {
    try {
      const { data } = await axios.post("/contacts", { name, number });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
