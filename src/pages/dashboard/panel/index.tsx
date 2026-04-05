import dynamic from "next/dynamic";
import Head from "next/head";

const Dashboard = dynamic(async () => import('@/ui/pages/Dashboard'), { ssr: false });

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Dashboard | Painel</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}

export default DashboardPage;