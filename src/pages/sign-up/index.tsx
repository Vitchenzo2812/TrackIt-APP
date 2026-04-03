import dynamic from "next/dynamic";
import Head from "next/head";

const SignUp = dynamic(async () => import('@/ui/pages/SignUp'), { ssr: false });

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>ITrackIt | Crie sua conta</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUp />
    </>
  );
}

export default SignUpPage;