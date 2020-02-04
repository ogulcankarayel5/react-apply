import axios from "axios";

import { API_BASE_APPLYFORM } from "../config/env";

export const APPLY_PENDING = "APPLY_PENDING";
export const APPLY_FULFILLED = "APPLY_FULFILLED";
export const APPLY_REJECTED = "APPLY_REJECTED";

export function Apply(name, email, info, formData, fileName) {
  return dispatch => {
    dispatch({
      type: "APPLY",
      payload: axios
        .post(`${API_BASE_APPLYFORM}/formapi`, {
          Name: name,
          Email: email,
          Info: info,
          File: formData,
          FileName: fileName
        })
        .then(result => result)
        .catch(err => err)
    });
  };
}
