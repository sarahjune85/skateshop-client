import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWFjZWUyNzJjYzg0MjZiNWVmMjZiNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODY5OTI2MywiZXhwIjoxNjM4OTU4NDYzfQ.O7IAi5buKxAY6fRO9NONBBChAMtRX99vS2SQPyf9KT4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
