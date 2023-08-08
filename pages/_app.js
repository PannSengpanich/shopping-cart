import NavigationBar from "@/components/NavigationBar";
import store from "@/store/index";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <style jsx global>{`
          body {
            margin: 0; /* Adjust the margin value as needed */
          }
        `}</style>
        <NavigationBar></NavigationBar>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
