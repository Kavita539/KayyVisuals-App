import axios from "axios";

const getLoginService = async ({ email, password }) => {
  return await axios.post("/api/auth/login", {
    email,
    password,
  });
};

export { getLoginService };