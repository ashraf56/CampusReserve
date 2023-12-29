import React from 'react';
import imgs from '../assets/education.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={imgs} className='w-12' />
          <p className='text-2xl'>Campus-Reserve  Ltd.<br /></p>
          <p>Providing reliable tech since 2000</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Catering Services</a>
          <a className="link link-hover">Equipment Rentals</a>
          <a className="link link-hover">Sports Facilities Reservations
          </a>
          <a className="link link-hover">Library Resources Access
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Data Protection
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;