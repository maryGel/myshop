import './footer.css';

function FooterContainer(){

  return(
    <div>

      {/* Upper Footer container */}
      <div className='footer-top'>
        <h3>MyShop's Newsletter</h3>
        <h2>Never miss the finest</h2>
        <p>Subscribe to our newletter to get 30% off on your purchase, valid for the first-time subscribers only. </p>

        <div className='email-container'> 
          <input className="email-input" type="text" placeholder="E-mail" />
          <button className='subscribe-button'>Subscribe</button>
        </div>
      </div>

      {/* Lower Footer container */}
      <div className='footer-bottom'>
        <div className='footer-list-container'>
          <div className='footer-list'>
            <h2> Customer Service</h2>
            <p> FAQ </p>
            <p> Returns </p>
            <p> Shipping Terms </p>
            <p> Payment Policy </p>
            <p> Contact Us </p>
          </div>

          <div className='footer-list'>
            <h2> My Account </h2>
            <p> Create Account </p>
            <p> Accounts </p>
          </div>

          <div className='footer-list'>
            <h2> Company </h2>
            <p> My Shop World </p>
            <p> About Us  </p>
            <p> Careers </p>
            <p> Investor Relations </p>
            <p> Supply Chain</p>
            <p> Disclosure </p>
            <p> Corporate Social Responsility</p>
          </div>
        </div>


        <div className='social-media-container'>
          <a href="#"><img className="social-media-icon" src="./images/socialMediaIcons/facebook.png" alt="fb" /></a>
          <a href="#"><img className="social-media-icon" src="./images/socialMediaIcons/pinterest.png" alt="pn" /></a>
          <a href="#"><img className="social-media-icon" src="./images/socialMediaIcons/twitter.png" alt="x" /></a>
          <a href="#"><img className="social-media-icon" src="./images/socialMediaIcons/youtube.png" alt="yt" /></a>
          <a href="#"><img className="social-media-icon" src="./images/socialMediaIcons/instagram.png" alt="ig" /></a>
          <a href="#"><img className="social-media-icon" src="./images/socialMediaIcons/tik-tok.png" alt="tt" /></a>
        </div>
      </div>

      {/* copyright box */}
      <div className='copyrightbox'>

        <p> @2025 My Shops </p>
        <p> Privacy Notice </p>
        <p> Terms & Conditions </p>
        <p> Cookie Notice </p>
        <p> Accessibility Toolkit </p>


      </div>
    </div>
  )

}

export default FooterContainer;