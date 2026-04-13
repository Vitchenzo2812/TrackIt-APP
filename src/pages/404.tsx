import dynamic from "next/dynamic";
import Head from "next/head";

const NotFound = dynamic(async () => import('@/ui/pages/NotFound'), { ssr: false });

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Página não encontrada</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </>
  );
}

export default NotFoundPage;