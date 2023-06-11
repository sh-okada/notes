import { validToken } from "@/api";
import {
  ERROR_STATUS,
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
} from "@/consts/httpStatus";
import { customAxios } from "@/libs/axios";
import { AxiosError } from "axios";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

export function withError<E extends { [key: string]: any }>(
  getServerSideProps: (
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<E>>
): GetServerSideProps<E> {
  return async (context) => {
    const { error } = context.query;

    if (
      error &&
      !isNaN(Number(error.toString())) &&
      ERROR_STATUS.includes(Number(error.toString()))
    ) {
      context.res.statusCode = Number(error.toString());
    }

    return getServerSideProps(context);
  };
}

export function withCookie<E extends { [key: string]: any }>(
  getServerSideProps: (
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<E>>
): GetServerSideProps<E> {
  return async (context) => {
    customAxios.interceptors.request.clear();
    customAxios.interceptors.response.clear();

    customAxios.interceptors.request.use((config) => {
      config.headers["Cookie"] = context.req.headers.cookie;
      return config;
    });

    customAxios.interceptors.response.use(undefined, (error: AxiosError) => {
      if (error.response?.status === UNAUTHORIZED) {
        context.res.setHeader(
          "Set-Cookie",
          error.response?.headers["set-cookie"] ?? []
        );
      }

      context.res.statusCode = error.response?.status ?? INTERNAL_SERVER_ERROR;

      return Promise.reject(error);
    });

    return getServerSideProps(context);
  };
}

export function withValidToken<E extends { [key: string]: any }>(
  getServerSideProps: (
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<E>>
): GetServerSideProps<E> {
  return async (context) => {
    try {
      await validToken();
    } catch {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }

    return getServerSideProps(context);
  };
}
