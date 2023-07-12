import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="first-section">
          <div className="first-left">
            <span>MAGIC PEPE</span>
            <p>
              Pepe , Pepe2.0,... and Many #PEPE over the memespace and Created
              many Millionaires. Immerse yourself in the captivating tokenomics
              of Trend 2.0. It's time to Unite all OGs Because the MEME frenzy
              has only just begin. MAGIC PEPE ($MPEPE) will lead the latest
              trends to bring more millionaires in the crypto space.
            </p>
          </div>
          <div className="first-right">
            <img src="images/avatarpepemagic.png" alt="" />
            <button>BUY NOW !</button>
          </div>
        </div>
        <div className="contract">
          <p>Contract Address: 0x000000000000000000000000000000000000000 </p>
          <button>CHART LINK &gt;</button>
        </div>
        <div className="second-section">
          <div className="second-title">Tokenomics</div>

          <div className="second-group-content">
            <div className="content">
              <div className="content-title">Token Name</div>
              <div className="content-info"> MAGIC PEPE</div>
            </div>

            <div className="content">
              <div className="content-title">Token Chain</div>
              <div className="content-info"> CHAIN ERC</div>
            </div>

            <div className="content">
              <div className="content-title">Max Supply</div>
              <div className="content-info"> 555.000.000 </div>
            </div>

            <div className="content">
              <div className="content-title">Tax Buy</div>
              <div className="content-info">2</div>
            </div>

            <div className="content">
              <div className="content-title">Tax Sell</div>
              <div className="content-info">2</div>
            </div>

            <div className="content">
              <div className="content-title">Total Supply</div>
              <div className="content-info"> 1000 000 $DAGMI</div>
            </div>
          </div>
          <div className="second-title">LP locked for 60 Days</div>
          <div className="second-group-icon">
            <a href="/">
              <img
                src="https://static.wixstatic.com/media/4bc8bd_6642fccbc8294eaeac73813649074376~mv2.webp"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://static.wixstatic.com/media/4bc8bd_fcda6d8afc3e4c779e724eecb66887cc~mv2.webp"
                alt=""
              />
            </a>
            <a href="/" className="special-icon">
              <img
                src="https://static.wixstatic.com/media/4bc8bd_8f4198aceafa48e3ae8fbd15e3f21a63~mv2.webp"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://static.wixstatic.com/media/4bc8bd_6d70a2362d4f49868d5654e291c3eb47~mv2.webp"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
