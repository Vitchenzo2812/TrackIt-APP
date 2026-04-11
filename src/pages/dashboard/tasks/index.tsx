import dynamic from "next/dynamic";
import Head from "next/head";

const DashboardTasks = dynamic(async () => import('@/ui/pages/Dashboard/Tasks'), { ssr: false });

const DashboardTasksPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Dashboard | Tarefas</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardTasks />
    </>
  );
}

export default DashboardTasksPage;