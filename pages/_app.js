import NavigationBar from "@/components/NavigationBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Component {...pageProps} />
    </>
  );
}
