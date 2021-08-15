type QueryParameter = string | number | boolean | null;

export type GetQueryStringParams = Record<
  string,
  QueryParameter | QueryParameter[] | undefined
>;
