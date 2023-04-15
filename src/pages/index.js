import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/frontend_programming.jpg';
import pic2 from '../assets/images/backend_programming.jpg';
import pic3 from '../assets/images/web_programming.jpg';
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
            In ChatGPT I trust, with ChatGPT I can confidently build or
            undertake any software project. Building my proficiency in using
            ChatGPT and has 3+ projects and counting built with the assistance
            of ChatGPT.
            <br />
            <br />
            18+ years of software development, w/c includes more than a decade
            of consulting work working directly with clients [onsite & remote].
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

    <section id="two" className="wrapper style3 special">
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

    <section id="three" className="wrapper alt style2"></section>
    <section className="spotlight">
      <div className="image">
        <img src={pic1} alt="" />
      </div>
      <div className="content">
        <h2>
          Skills
          <br />
        </h2>
        <p>ChatGPT</p>
        <p>JavaScript</p>
        <p>NodeJS</p>
        <p>ReactJS</p>
        <p>Redux/reduxjstoolkit</p>
      </div>
    </section>
    <section className="spotlight">
      <div className="image">
        <img src={pic2} alt="" />
      </div>
      <div className="content">
        <h2>
          Skills
          <br />
        </h2>
        <p>Python</p>
        <p>Ubuntu Server</p>
        <p>Jenkins</p>
        <p>PostgreSQL</p>
        <p>Solidity</p>
      </div>
    </section>
    <section className="spotlight">
      <div className="image">
        <img src={pic3} alt="" />
      </div>
      <div className="content">
        <h2>
          Skills
          <br />
        </h2>
        <p>COBOL/Lawson 4GL</p>
        <p>IPA (infor process automation)</p>
        <p>Design Studio</p>
        <p>C++</p>
        <p>SQL</p>
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
