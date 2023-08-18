import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// Categories
export const fetchCategories = async () => api.get("/api/categories");

// setUps
export const fetchSetups = async () => api.get(`/api/setups`);

export const SingleSetups = async (queryString) =>
  api.get(`/api/setups/${queryString}`);

// setUpsGiven
export const SetupsGiven = async () => api.get(`/api/setup-givens`);
export const etupsGivenBy = async (queryString) =>
  api.get(`/api/setup-givens/${queryString}`);

// setUpsGiven
export const SetupTradeType = async () => api.get(`/api/trade-types`);
export const SetupTradeTypeSingle = async (queryString) =>
  api.get(`/api/trade-types/${queryString}`);
