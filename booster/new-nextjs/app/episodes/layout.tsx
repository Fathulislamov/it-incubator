import { BaseLayout } from "components/BaseLayout/BaseLayout";
import { Metadata, NextPage } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Episodes",
  description: "New nextjs",
};

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default Layout;
