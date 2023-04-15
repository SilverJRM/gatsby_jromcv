import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Education</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>B.S. Electronics and Communication Engineering</h3>
          <p>
            1998 – 2003 Mapua Institute of Technology, Intramuros, Manila,
            Philippines <br />
            Academic Scholar
            <br /> Licensed on November 2003
          </p>
          <h3>Post Graduate Certification – Project Management</h3>
          <p>2013 University of the Philippines, Diliman</p>

          <hr />

          <h4>Hobbies</h4>
          <p>
            Apart from being a software developer, I enjoy most of my time being
            working-out in a gym, running, hiking, biking, swimming, and playing
            some sports like badminton/bowling, etc
          </p>

          <p>
            When forced in-doors, I like to cook, and used to play a lot of
            blizard games [Starcraft/Diablo/Warcraft] and some Dota. Currently
            burns my time learning/exploring new technologies in blockchain and
            software development
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
