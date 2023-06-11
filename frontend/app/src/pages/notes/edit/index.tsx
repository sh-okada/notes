import PostForm from "@/components/organisms/PostForm";
import { withCookie, withValidToken } from "@/utils/middleware";
import { GetServerSideProps } from "next";

export default function Page() {
  return <PostForm />;
}

export const getServerSideProps: GetServerSideProps = withCookie(
  withValidToken(async (_context) => {
    return {
      props: {},
    };
  })
);
