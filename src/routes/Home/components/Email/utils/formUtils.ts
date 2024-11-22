import { IFields } from "../types";

export const validateFields = (fields: any) => {
  return !Object.keys(fields).find(
    (field) => !fields[field] || fields[field].length <= 0
  );
};
