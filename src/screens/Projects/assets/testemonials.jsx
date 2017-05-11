import React from 'react';

import Testemonial from '../../../components/Testemonial';

import ourea from './ourea.png';
import eventgeek from './eventgeek.png';
import meaningfulPlace from './meaningful-place.png';

const testemonials = [
  <Testemonial
    key="meaningful-place"
    className="meaningful-place"
    signedBy="Kestas Barzdaitis, Managing partner at" company="Meaningful.place"
    url="http://www.meaningful.place/"
    logo={meaningfulPlace}
  >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>UpWave</strong> is a great engineering partner thanks to their depth of knowledge in technology, their design experience, coupled with their flexibility to engage with their clients and their firm commitment to deliver. <strong>UpWave</strong> team always tries to learn and understand our business needs instead of just coding to our specs.
  </Testemonial>,
  <Testemonial
    key="eventgeek"
    className="eventgeek"
    signedBy="Alex Patriquin, CEO at"
    company="EventGeek"
    url="https://www.eventgeek.com/"
    logo={eventgeek}
  >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We had a great experience working together with <strong>UpWave agency</strong>. Agency made solid efforts and their contributions meaningfully advanced our company's progress. Their greatest strength is in thinking about both technical and business problems holistically.
  </Testemonial>,
  <Testemonial
    key="ourea"
    className="ourea"
    signedBy="James Campion, CEO at"
    company="Ourea"
    url="http://oureasystems.com/"
    logo={ourea}
  >
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>UpWave agency</strong> helped develop, design and maintain our webapp. I found their service to be very friendly and helpful. They will always go out of their way to ensure completion of tasks in the most effective way. <strong>UpWave</strong> completed work quickly and always to the standard you expect. I would recommend <strong>UpWave agency's</strong> service to anyone looking for talented developers.
  </Testemonial>,
];

export default function getTestemonials(withUrls = true) {
  if (withUrls) return testemonials;

  let result = [];

  testemonials.forEach(testemonial => {
    result.push(
      React.cloneElement(testemonial, {
        logo: null,
      }),
    );
  });

  return result;
}
