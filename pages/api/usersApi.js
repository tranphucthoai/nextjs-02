import { API_LINK } from "../../constants";

const usersApi = (params = "") => {
  const data = fetch(`${API_LINK}users/${params}`).then((response) =>
    response.json()
  );

  return data;
};

export default usersApi;
