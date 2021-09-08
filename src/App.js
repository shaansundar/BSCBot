import React from "react";
import PropTypes from  "prop-types";

function App(props) {
  return (
    <section className="text-binanceText body-font grid place-items-center h-screen">
      <div className="container flex px-24 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dex-bin.bnbstatic.com/static/images/home/wallet/BSC-dark.svg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-binanceTextPrimary">
            Connect Your Wallet with BSC Discord!
          </h1>
          <p className="mb-8 leading-relaxed text-binanceTextPrimary">
            Connecting your wallet will enable you to participate in locked communities, earn perks and much more!
          </p>
          <div className="flex justify-center">
            <button className={`inline-flex text-binanceTextSecondary bg-binanceButtonPrimary border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}>
              Connect MetaMask
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-binanceButtonSecondary text-binanceTextPrimary border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Connect Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

App.defaultProps = {
  theme: 'yellow'
};

App.propTypes = {
  theme: PropTypes.string.isRequired
};

export default App;