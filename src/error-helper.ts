interface HttpError extends Error {
  status: number;
}

export function throwHttpError(message: string, status: number): never {
  const error = new Error(message);
  error.name = "HttpError";
  (error as HttpError).status = status;
  throw error;
}
