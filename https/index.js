import axios from "axios";

const api = axios.create({
  baseURL: "https://setupdev.onrender.com",
  headers: {
    Authorization: `Bearer 1a0579ac6f7634e72d2472f040f8eb95f6928123fa61e4a11daffcdcd24d779e71f6e0bd8c13af06ff0b32df18f37b9422ced4b8e48b11ab508c30855a8cfd360ab952e0a29eacbfeeb7ac23cb6c9b0ca1cb37f51f444fbd9c7e5c238ba382f5b9d0a9261c3947a91e14021d72dc664333cfcfb99fa30b550d4b8af2ff302773`,
  },
});

// Categories
export const fetchCategories = async () => {
  try {
    const response = await api.get("/api/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow the error to handle it at a higher level
  }
};

// setUps
export const fetchSetups = async () => api.get(`/api/setups?populate=*`);

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
