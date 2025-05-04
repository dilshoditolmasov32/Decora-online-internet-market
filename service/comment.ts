import { MessageCommentProps } from "@types";
import API_URL from "../api/interseptor"

export const createComment = async (data:MessageCommentProps) => {
  try {
    const response:any = await API_URL.post("/comment", data);
    return response;
  } catch (error) {
    console.log(error);

    return error;
  }
};


export const deleteComment = async (commentId: string | null) => {
    try {
      const response = await API_URL.delete(`/comment/${commentId}`, );
      return response
    } catch (error) {
      console.error( error);
      return null;
    }
  };
  
