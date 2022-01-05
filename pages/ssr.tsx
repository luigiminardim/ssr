import type { ComponentProps } from "react";
import { GetServerSideProps } from "next";

export default function Oi(props: { host: string }) {
  return <div>Host: {props.host}</div>;
}

export const getServerSideProps: GetServerSideProps<
  ComponentProps<typeof Oi>
> = async (context) => {
  return {
    props: {
      host: context.req.headers.host,
    },
  };
};
