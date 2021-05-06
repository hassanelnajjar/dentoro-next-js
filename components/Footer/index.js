import React from 'react';
import Link from 'next/link';
import { Row, Col, Typography } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

// import LogoImage from '../common/Image';
// import logo from '../../assets/images/logo.png';

const { Title } = Typography;

const Footer = () => (
  <div id="footer">
    <Row className="icons-container">
      <Col>
        <Title level={5} className="title">
          <img
            className="logo"
            src=""
            alt="Dental Clinic logo image show a tooth inside a heart"
          />
          Dental
        </Title>
        <p className="description">lorem</p>
      </Col>
      <Col>
        <Title level={5} className="title">
          Services
        </Title>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Tooth Cleaning</p>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Oral Surgery</p>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Painless Dentistry</p>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Periodontics</p>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Dental Calculus</p>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Prevention</p>
          </Link>
        </Col>
      </Col>
      <Col>
        <Title level={5} className="title">
          Follow Us
        </Title>
        <Col>
          <Link
            className="link"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <div>
              <FacebookOutlined /> facebook
            </div>
          </Link>
        </Col>
        <Col>
          <Link
            className="link"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <div>
              <InstagramOutlined /> instagram
            </div>
          </Link>
        </Col>
        <Col>
          <Link
            className="link"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <div>
              <YoutubeOutlined /> YouTube
            </div>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="www.twitter.com/">
            <div>
              <TwitterOutlined /> twitter
            </div>
          </Link>
        </Col>
      </Col>
      <Col>
        <Col>
          <Title level={5} className="title">
            Legal
          </Title>
          <Link className="link" href="/" target="_blank">
            <p>Terms</p>
          </Link>
        </Col>
        <Col>
          <Link className="link" href="/" target="_blank">
            <p>Legal</p>
          </Link>
        </Col>
      </Col>
    </Row>
  </div>
);
export default Footer;
