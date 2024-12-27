import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white p-4 fontstyle">
        <div className="container-fluid">
          <div className="row">
            
            {/* About Section */}
            <div className="col-md-4">
              <h5 className="fw-bold">About TradeBaazaar</h5>
              <p>
                TradeBaazaar is a modern stock trading platform designed to make investing simple, secure, and accessible to everyone. Your journey to financial success starts here!
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="col-md-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Section */}
            <div className="col-md-4">
              <h5 className="fw-bold">Contact Us</h5>
              <p>Email: <a href="mailto:support@tradebaazaar.com" className="text-white text-decoration-none">support@tradebaazaar.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-white text-decoration-none">+1 234 567 890</a></p>
              <p>Address: 123 Financial Street, Investment City, MarketLand</p>
              <div>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white me-3"><i className="fab fa-facebook"></i></a>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>

          </div>

          {/* Disclaimer Section */}
          <div className="row mt-4">
            <div className="col">
              <h6 className="fw-bold">Attention Investors & Disclaimer</h6>
              <p className="small">
                TradeBaazaar Securities Pvt. Ltd.: SEBI Registration No. INZ000315837 | NSE TM Code: 13942 | BSE TM Code: 6155 | CDSL Reg No.: IN-DP-761-2024 | CIN: U65100DL2021PTC376860 | Compliance Officer: Mr. Kapil Jaikalyani. Tel No.: (022) 24229920. Email ID: compliance@tradebaazaar.com | Registered Address: 809, New Delhi House, Barakhamba Road, Connaught Place, New Delhi - 110001 | RKSV Commodities India Pvt. Ltd.: SEBI Registration No.: INZ000015837 | MCX TM Code: 46510 | NSE TM Code: 90393 | CIN: U74900DL2009PTC189166 | Compliance Officer: Mr. Amit Lalan. Tel No.: (022) 24229920. Email ID: compliance@rksv.in | Registered Address: 807, New Delhi House, Barakhamba Road, Connaught Place, New Delhi - 110001. Correspondence Address: 30th Floor, Sunshine Tower, Senapati Bapat Marg, Dadar (West), Mumbai - 400013.
              </p>
              <p className="small">
                Procedure to file a complaint on SEBI SCORES: Register on the SCORES portal. Mandatory details for filing complaints on SCORES include: Name, PAN, Address, Mobile Number, and E-mail ID. Benefits include effective communication and speedy redressal of grievances. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI, along with our Terms of Use and Privacy Policy.
              </p>
              <p className="small">
                Disclaimer: Investment in securities markets is subject to market risks, read all the related documents carefully before investing. Brokerage will not exceed the SEBI prescribed limit.
              </p>
              <p className="small">
                Mutual Funds: Top rated funds do not constitute any advice. Please read the offer documents carefully before investing. TradeBaazaar shall not accept any liability arising out of your investments.
              </p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} TradeBaazaar. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
