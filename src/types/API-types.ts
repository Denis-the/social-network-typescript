export enum RequestStatus {
  idle = "IDLE",
  loading = "LOADING",
  succeeded = "SUCCEEDED",
  error = "ERROR",
}

export interface RequestError {
  code?: number;
  message?: string;
}

export interface RequestState {
  status: RequestStatus;
  error?: RequestError;
}
