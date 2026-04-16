import dynamic from "next/dynamic";
import Head from "next/head";

const DashboardFinance = dynamic(async () => import('@/ui/pages/Dashboard/Finance'), { ssr: false });

const DashboardFinancePage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Dashboard | Finanças</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardFinance />
    </>
  );
}

export default DashboardFinancePage;