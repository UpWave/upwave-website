import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import Slider from 'nuka-carousel';

import Waves from '../../components/Waves';
import Content from '../../components/Content';
import Testemonial from '../../components/Testemonial';
import routerAnimation from '../../components/common/components/routerAnimation';
import SVGElement from '../../components/common/components/SVGElement';

import '../../assets/stylesheets/our-work.css';

import worldMap from './assets/world-map.svg';
import selectedWorldMap from './assets/selected-world-map.svg';
import ourea from './assets/ourea.png';
import eventgeek from './assets/eventgeek.png';
import meaningfulPlace from './assets/meaningful-place.png';

// TODO: REFACTOR DAT SHIT
class Projects extends React.Component {
  static propTypes = {
    registerAnimation: React.PropTypes.func.isRequired,
  };

  slider = null;
  mapPoints = null;
  mapPointsHandlers = [];

  state = {
    currentSlide: 0,
  };

  get testemonials() {
    return [
      <Testemonial
        key="meaningful-place"
        className="meaningful-place"
        signedBy="Kestas Barzdaitis, Managing partner at" company="Meaningful.place"
        url="http://www.meaningful.place/"
        logo={meaningfulPlace}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Upwave</strong> is a great engineering partner thanks to their depth of knowledge in technology, their design experience, coupled with their flexibility to engage with their clients and their firm commitment to deliver. <strong>Upwave</strong> team always tries to learn and understand our business needs instead of just coding to our specs.
      </Testemonial>,
      <Testemonial
        key="ourea"
        className="ourea"
        signedBy="James Campion, CEO at"
        company="Ourea"
        url="http://oureasystems.com/"
        logo={ourea}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Upwave agency</strong> helped develop, design and maintain our webapp. I found his service to be very friendly and helpful. He will always go out of his way to ensure completion of tasks in the most effective way. He completed changes quickly and always to the standard you expect. I would recommend <strong>Upwave agency's</strong> service to anyone looking for talented developers.
      </Testemonial>,
      <Testemonial
        key="eventgeek"
        className="eventgeek"
        signedBy="Alex Patriquin, CEO at"
        company="EventGeek"
        url="https://www.eventgeek.com/"
        logo={eventgeek}
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We had a great experience working together with <strong>Upwave agency</strong>. Agency made solid efforts and their contributions meaningfully advanced our company's progress. Their greatest strength is in thinking about both technical and business problems holistically.
      </Testemonial>,
    ];
  }

  componentDidMount() {
    this.mapPoints = this.getMapControls();

    this.mapPoints.forEach(point => {
      const handler = this.getOnMapPointClick();
      const type = 'click';

      point.addEventListener(type, handler);

      this.mapPointsHandlers.push({ type, point, handler });
    });

    this.setActiveMapPoint(0);

    this.slider = this.refs.slider;
  }

  componentWillUnmount() {
    this.mapPointsHandlers.forEach(({ type, point, handler }) => {
      point.removeEventListener(type, handler);
    });
  }

  getOnMapPointClick() {
    return this.onMapPointClick.bind(this);
  }

  onMapPointClick(e) {
    switch (e.currentTarget.id) {
      case 'Lithuania':
        this.slider.goToSlide(0);
        break;
      case 'London':
        this.slider.goToSlide(1);
        break;
      case 'SF':
        this.slider.goToSlide(2);
        break;
      default:
        this.slider.goToSlide(0);
    }
  }

  getMapControls() {
    const map = ReactDOM.findDOMNode(this.refs.selectedMap).children[0];
    let result = [];

    result.push(map.getElementById('Lithuania'));
    result.push(map.getElementById('London'));
    result.push(map.getElementById('SF'));

    return result;
  }

  beforeSlide(prev, next) {
    this.setState({
      currentSlide: next
    });

    this.setActiveMapPoint(next)
  }

  setActiveMapPoint(id) {
    this.mapPoints.forEach(point => {
      point.setAttribute('class', '');
    });

    this.mapPoints[id].setAttribute('class', 'active');
  }

  goNext() {
    this.slider.nextSlide();
  }

  goPrev() {
    this.slider.previousSlide();
  }

  goToSlide(e) {
    this.slider.goToSlide(parseInt(e.currentTarget.id, 10));
  }

  render() {
    return (
      <section className="container">
        <Content
          name="projects"
          registerAnimation={this.props.registerAnimation}
          className="box our-work"
        >
          <span
            className="arrow-previous"
            onClick={this.goPrev.bind(this)}
          ></span>
          <span
            className="arrow-next"
            onClick={this.goNext.bind(this)}
          ></span>
          <MediaQuery query='(min-device-width: 569px)'>
            <SVGElement
              className="world-map"
              svg={worldMap}
            ></SVGElement>
            <SVGElement
              className="selected-world-map"
              svg={selectedWorldMap}
              ref='selectedMap'
            ></SVGElement>
          </MediaQuery>
          <section className='testimonials-slider'>
            <MediaQuery query='(max-device-width: 1440px)'>
              <Slider
                beforeSlide={this.beforeSlide.bind(this)}
                swiping={true}
                wrapAround={true}
                decorators={[]}
                ref='slider'
              >{this.testemonials}</Slider>
            </MediaQuery>
            <MediaQuery query='(min-device-width: 1441px)'>
              <Slider
                slidesToShow={3}
                decorators={[]}
                ref='slider'
              >{this.testemonials}</Slider>
            </MediaQuery>
          </section>
          <ul className="bullets bullets-inline bullets-active">
            <li
              id='0'
              className={
                `bullet ${this.state.currentSlide === 0 ? 'active' : ''}`
              }
              onClick={this.goToSlide.bind(this)}
            ></li>
            <li
              id='1'
              className={
                `bullet ${this.state.currentSlide === 1 ? 'active' : ''}`
              }
              onClick={this.goToSlide.bind(this)}
            ></li>
            <li
              id='2'
              className={
                `bullet ${this.state.currentSlide === 2 ? 'active' : ''}`
              }
              onClick={this.goToSlide.bind(this)}
            ></li>
          </ul>
        </Content>
        <Waves mode="red" registerAnimation={this.props.registerAnimation} />
      </section>
    );
  }
}

export default routerAnimation(Projects);
