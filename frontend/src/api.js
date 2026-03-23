// const BASE_URL = "http://127.0.0.1:8001";
const BASE_URL = "https://ai-medicine-manager-backend.onrender.com";

export const addMedicine = async (data) => {
  return fetch(`${BASE_URL}/medicine/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const addFeedback = async (data) => {
  return fetch(`${BASE_URL}/feedback/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const getRecommendation = async (id) => {
  const res = await fetch(`${BASE_URL}/smart/recommendation/${id}`);
  return res.json();
};
