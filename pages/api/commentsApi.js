import { API_LINK } from "../../constants";

const commentsApi = (params = "") => {
  const data = fetch(`${API_LINK}comments/${params}`).then((response) =>
    response.json()
  );

  return data;
};

export default commentsApi;
