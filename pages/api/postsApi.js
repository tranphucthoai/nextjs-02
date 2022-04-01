import { API_LINK } from "../../constants";

const postsApi = (params = "") => {
  const data = fetch(`${API_LINK}posts/${params}`).then((response) =>
    response.json()
  );

  return data;
};

export default postsApi;
