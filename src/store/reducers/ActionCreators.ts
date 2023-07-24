import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
} from "./UserSlice";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching());
    const respone = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(usersFetchingSuccess(respone.data));
  } catch (e) {
    // let e = (_e as Error).message;
    dispatch(usersFetchingError(getErrorMessage(e)));
  }
};
