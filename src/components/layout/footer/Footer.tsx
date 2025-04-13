import { FC } from "react";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topSection}>
          <div className={styles.linkColumn}>
            <h4>Resources</h4>
            <ul>
              <li>Find A Store</li>
              <li>Become A Member</li>
              <li>Send Us Feedback</li>
              <li>Student Discounts</li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Help</h4>
            <ul>
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <ul>
              <li>About Nike</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className={styles.socialMedia}>
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</p>
          <ul className={styles.legalLinks}>
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
