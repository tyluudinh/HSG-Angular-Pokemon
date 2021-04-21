export interface IApiResult<T> {
  count: number;
  next: string;
  previous: string;
  results: T;
}

export interface ApiResultStateModel<T> {
  payload?: any;
  loading: boolean;
  errors: string;
  data: T;
}
export function initApiResultState(data): ApiResultStateModel<typeof data> {
  return {
    payload: null,
    loading: false,
    errors: null,
    data
  } as ApiResultStateModel<typeof data>;
}
