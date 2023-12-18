import { useState } from "react";
import axios from "axios";

const useUpdateLike = (initialLike, id) => {
  // console.log(initialLike, id, "from useUpdateLike");
  const user_token = localStorage.getItem("token");
  const [like, setLike] = useState(initialLike);
  let like_value = initialLike + 1;
  let user_id = id;

  const updateLike = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/update-like/${like_value}/${user_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user_token}`,
          },
        }
      );
      if (response.status === 200) {
        setLike(like_value);
      }
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  // console.log("like updated", like);
  return [like, updateLike];
};

export default useUpdateLike;
