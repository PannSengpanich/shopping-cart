import NavigationBar from "@/components/NavigationBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0; /* Adjust the margin value as needed */
        }
      `}</style>
      <NavigationBar></NavigationBar>
      <Component {...pageProps} />
    </>
  );
}
