import WelcomePage from "@/ui/pages/Welcome";
import Head from "next/head";

export default function DefaultPage() {
  return (
    <>
      <Head>
        <title>ITrackIt | Bem-vindo</title>
        <meta name="description" content="Um hub unificado de produtividade para gerenciar tarefas, construir hábitos e controlar suas finanças — tudo em um só lugar." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WelcomePage />
    </>
  );
}
