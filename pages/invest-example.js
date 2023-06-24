// import Banar from "../components/about/Banar";
import Job from "../components/about/Job";
import Market from "../components/about/Market";
import Overview from "../components/about/Overview";
import Team from "../components/about/Team";
import Banner from "../components/common/Banner";
import Breadcrumb from "../components/common/Breadcrumb";
import GallerySlider from "../components/sliders/GallerySlider";
import PaymentForm from "../components/PaymentForm";
import { useEffect, useState } from "react";
import { connectWallet } from "../services/payment/walletUtils";
import { AccessDenied, MissingWallet } from "../services/payment/errors";
import { tryConnection } from "../services/payment/utils";
const InvestExample = () => {
  const [connected, setConnected] = useState(false);
  const [walletConnection, setWalletConnection] = useState(null);

  useEffect(() => {
    const connect = async () => {
      let connection = await tryConnection();
      if (connection) {
        setConnected(true);
        setWalletConnection(connection);
      }
    };
    connect();
  }, []);
  useEffect(() => {}, [connected]);
  const handle_connect = async () => {
    try {
      let connection = await connectWallet();
      setConnected(true);
      setWalletConnection(connection);
    } catch (error) {
      if (error instanceof AccessDenied) {
        alert("kindly accept our request to access your wallet 🫠");
      } else if (error instanceof MissingWallet) {
        alert("A wallet must be installed to proceed 👛");
      } else {
        alert("Internal Error");
      }
    }
  };
  if (connected) {
    return (
      <>
        <PaymentForm walletConnection={walletConnection} />
      </>
    );
  } else {
    return (
      <>
        <section className="registration clear__top">
          <div className="container">
            <button
              type="submit"
              className="button button--effect"
              onClick={handle_connect}
            >
              Connect
            </button>
          </div>
        </section>
      </>
    );
  }
};

export default InvestExample;
