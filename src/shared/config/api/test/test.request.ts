import httpClient from '@/shared/config/api/httpClient';
import type { TestApiType } from '@/shared/config/api/test/test.model';
import type { ReqWithPagination } from '@/shared/config/api/types';
import { ENDP_POSTS } from '@/shared/config/api/URLs';
import type { AxiosResponse } from 'axios';

const getPosts = async (
  pagination?: ReqWithPagination,
): Promise<AxiosResponse<TestApiType>> => {
  const response = await httpClient.get(ENDP_POSTS, { params: pagination });
  return response;
};

export { getPosts };
