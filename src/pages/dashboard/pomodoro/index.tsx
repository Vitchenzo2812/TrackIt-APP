import dynamic from "next/dynamic";
import Head from "next/head";

const DashboardPomodoro = dynamic(async () => import('@/ui/pages/Dashboard/Pomodoro'), { ssr: false });

const DashboardPomodoroPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Dashboard | Pomodoro</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardPomodoro />
    </>
  );
}

export default DashboardPomodoroPage;