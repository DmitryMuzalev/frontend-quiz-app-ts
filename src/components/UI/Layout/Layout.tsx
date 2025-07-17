import { Header } from "../Header/Header";

type Props = {
  children: React.ReactNode;
};
function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  );
}

export { Layout };
