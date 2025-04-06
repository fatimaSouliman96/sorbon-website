import { TAPIResponce, TSuccessResponce } from "./types";

function isSuccessResponse<T>(
  response: TAPIResponce<T> | undefined,
): response is TSuccessResponce<T> {
  return response !== undefined && response.status === 200;
}

export default isSuccessResponse;
