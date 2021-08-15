import { GetQueryStringParams } from "./interface/utils";

function getQueryString(params: GetQueryStringParams): string {
  const stringifiedParams: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (value instanceof Array) {
      stringifiedParams.push(`${key}=${value.join(",")}`);
      return;
    }
    stringifiedParams.push(`${key}=${value}`);
  });

  return stringifiedParams.join("&");
}

export default getQueryString;
