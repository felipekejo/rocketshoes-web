import React from 'react';

import { Container } from './styles';

function About() {
  return (
    <Container>
      <div>
        <h1>About Computer Force</h1>
        <p>
          Computer Force is a brand-new start-up company designed to provide
          first- class service to its customers. Based in Parramatta in Sydney,
          Computer Force provides top class computing products at bargain
          prices, for sale throughout Australia.
        </p>
      </div>
      <div>
        <h2>Our goals are:</h2>
        <ul>
          <li>
            To become Australia’s most well-known and respected hardware and
            software provider
          </li>
          <br />
          <br />
          <li>
            To create a service-based organisation whose goal is to exceed
            customer's expectations
          </li>
          <br />
          <br />
          <li>To provide a smooth, efficient, and transparent sales process</li>
        </ul>
      </div>
      <div>
        <h3>You can contact us using the following methods:</h3>
        <p>Address: 100 Main Road, Parramatta, NSW 20150</p>
        <p>Email: info@computerforce.com.au</p>
        <p>Phone: 02 4444 5555</p>
      </div>
    </Container>
  );
}

export default About;
