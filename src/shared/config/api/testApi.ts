import { ENDP_POSTS } from "@/shared/config/api/URLs";
import { type ReqWithPagination } from "./types";
import { type AxiosResponse } from "axios";
import { type TestApiType } from "@/shared/types/testApi";
import httpClient from "./httpClient";

const getPosts = async (
  pagination?: ReqWithPagination,
): Promise<AxiosResponse<TestApiType>> => {
  const response = await httpClient.get(ENDP_POSTS, { params: pagination });
  return response;
};

export { getPosts };
