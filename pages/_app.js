import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-toastify/dist/ReactToastify.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/navbar.css"

import { Provider } from "react-redux";
import Layout from "../components/_App/Layout";
import { useStore } from "../store/reducers/reducers";

import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { useContext } from "react";

const MyApp = ({ Component, pageProps }) => {
  const userData = useUserData();

  const store = useStore(pageProps.initialReduxState);
  return (
    <UserContext.Provider value={userData}>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </UserContext.Provider>
  );
};

export default MyApp;
