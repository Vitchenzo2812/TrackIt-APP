import dynamic from "next/dynamic";
import Head from "next/head";

const DashboardGroups = dynamic(async () => import('@/ui/pages/Dashboard/Groups'), { ssr: false });

const DashboardGroupsPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Dashboard | Grupos</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardGroups />
    </>
  );
}

export default DashboardGroupsPage;