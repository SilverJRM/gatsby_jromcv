import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/API_Server.jpg';
import pic2 from '../assets/images/TradeBot WebPage.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Summary</h2>
          <p>
            18+ years experience in software development, w/c includes more than
            a decade of consulting work working directly with clients [onsite &
            remote].
            <br />
            <br />
            Has worked on 60-70+ projects ~45% of as a lead/solo consultant.
            Full implementation of projects from design, estimation, coding,
            testing, deployment and support.
            <br />
            <br />
            Confident on learning new/any technologies on pursuit of solving
            problems
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Express/Axios API Server
            <br />
          </h2>
          <p>
            This server provides convenient access to a PostGre database through
            a network of endpoints that allow for easy read, write, and update
            operations.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Web Page for Trading Bot</h2>
          <p>
            Fast and reliable trading bot webpage is built using modern
            technologies such as vite, react, and redux-toolkit. It provides
            easy-to-read details about ongoing trades and the current status of
            the bot on the network. The webpage seamlessly reads data from
            endpoints on our API server.
          </p>
        </div>
      </section>
      {/* <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section> */}
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Experience</h2>
          <p>programming language and tools used</p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Application Development Lead </h3>
            <p>
              [Accenture] <br /> 2022 - Present <br />
              Nodejs, Python, ReactJS, Redux/reduxjstoolkit, Solidity, Google
              Cloud, Jenkins, Power Automate
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Blockchain Developer </h3>
            <p>
              [Freelance] <br /> 2021 - 2022 <br />
              Nodejs, Solidity, Python, JavaScript, ReactJS, Moralis,
              PostgreSQL, Hardhat framework, Brownie framework, Express, MongoDB
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Sr. Technical Consultant </h3>
            <p>
              [Infor] <br /> 2006 - 2020 <br />
              COBOL, JavaScript, SQL, HTML, Design Studio, Infor Process
              Automation
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Software Engineer</h3>
            <p>
              [Accenture] <br /> 2004 - 2006 <br />
              Cobol, C++
            </p>
          </li>
          {/* <li className="icon fa-heart">
            <h3>Solidity</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>SQL</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Back to top</h2>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p> */}
        </header>
        <ul className="actions stacked">
          <li>
            <a href="#" className="button fit primary">
              TOP
            </a>
          </li>
          {/* <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li> */}
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
