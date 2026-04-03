import dynamic from "next/dynamic";
import Head from "next/head";

const SignIn = dynamic(async () => import('@/ui/pages/SignIn'), { ssr: false });

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </>
  );
}

export default SignInPage;