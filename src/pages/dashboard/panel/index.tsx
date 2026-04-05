import dynamic from "next/dynamic";
import Head from "next/head";

const DashboardPanel = dynamic(async () => import('@/ui/pages/Dashboard/Panel'), { ssr: false });

const DashboardPanelPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Dashboard | Painel</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardPanel />
    </>
  );
}

export default DashboardPanelPage;