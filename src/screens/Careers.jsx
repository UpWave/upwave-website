import PropTypes from 'prop-types';
import React from 'react';
// import MediaQuery from 'react-responsive';
import { browserHistory } from 'react-router';

import Content from '../components/Content';
import Panel from '../components/Panel';
import routerAnimation from '../components/common/components/routerAnimation';
import Button from '../components/common/components/Button';

import '../assets/stylesheets/careers.css';

class Careers extends React.Component {
  static propTypes = {
    registerAnimation: PropTypes.func.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  };

  openDialog(e) {
    browserHistory.push(`/careers/${e.currentTarget.id}`);
  }

  render() {
    return (
      <section className="container">
        <Content
          name="career"
          registerAnimation={this.props.registerAnimation}
          className="box career-box"
        >
          <Panel isContainer={true}>
            <Panel>
              <section className="career-position">
                <section
                  id="1"
                  className="position-header ruby"
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>Senior Ruby developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                <section className="position-text">
                  <h3>Requirements:</h3>
                  <ul className="bullets">
                    <li className="bullet">2+ years of experience in software development</li>
                    <li className="bullet">Solid experience in JS</li>
                    <li className="bullet">Development using micro-services architecture, JS, NodeJS, MySQL and Docker</li>
                    <li className="bullet">User friendly UI</li>
                    <li className="bullet">English skills intermediate or better</li>
                  </ul>
                  <h3>Technology stack:</h3>
                  <ul className="bullets">
                    <li className="bullet">Javascript (ECMAScript 6), NodeJS</li>
                    <li className="bullet">ReactJS, AngularJS, EmberJS</li>
                    <li className="bullet">CSS/SCSS, Twitter Bootstrap</li>
                    <li className="bullet">Webpack, Grunt, Gulp, Yeoman, NPM</li>
                    <li className="bullet">Databases: relational (orm), no-sql</li>
                    <li className="bullet">Docker, Heroku</li>
                    <li className="bullet">Networking skills</li>
                  </ul>
                </section>
                <section className="position-footer">
                  <Button
                    id='1'
                    callback={this.openDialog.bind(this)}
                    type="button"
                    className="nav-button"
                  >
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
            <Panel>
              <section className="career-position">
                <section
                  id="2"
                  className="position-header ruby"
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>Junior Ruby developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                <section className="position-text">
                  <h3>Requirements:</h3>
                  <ul className="bullets">
                    <li className="bullet">2+ years of experience in software development</li>
                    <li className="bullet">Solid experience in JS</li>
                    <li className="bullet">Development using micro-services architecture, JS, NodeJS, MySQL and Docker</li>
                    <li className="bullet">User friendly UI</li>
                    <li className="bullet">English skills intermediate or better</li>
                  </ul>
                  <h3>Technology stack:</h3>
                  <ul className="bullets">
                    <li className="bullet">Javascript (ECMAScript 6), NodeJS</li>
                    <li className="bullet">ReactJS, AngularJS, EmberJS</li>
                    <li className="bullet">CSS/SCSS, Twitter Bootstrap</li>
                    <li className="bullet">Webpack, Grunt, Gulp, Yeoman, NPM</li>
                    <li className="bullet">Databases: relational (orm), no-sql</li>
                    <li className="bullet">Docker, Heroku</li>
                    <li className="bullet">Networking skills</li>
                  </ul>
                </section>
                <section className="position-footer">
                  <Button
                    id='2'
                    callback={this.openDialog.bind(this)}
                    type="button"
                    className="nav-button"
                  >
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
          </Panel>
          <Panel isContainer={true}>
            <Panel>
              <section className="career-position">
                <section
                  id="3"
                  className="position-header js"
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>Javascript developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                <section className="position-text">
                  <h3>Requirements:</h3>
                  <ul className="bullets">
                    <li className="bullet">2+ years of experience in software development</li>
                    <li className="bullet">Solid experience in JS</li>
                    <li className="bullet">Development using micro-services architecture, JS, NodeJS, MySQL and Docker</li>
                    <li className="bullet">User friendly UI</li>
                    <li className="bullet">English skills intermediate or better</li>
                  </ul>
                  <h3>Technology stack:</h3>
                  <ul className="bullets">
                    <li className="bullet">Javascript (ECMAScript 6), NodeJS</li>
                    <li className="bullet">ReactJS, AngularJS, EmberJS</li>
                    <li className="bullet">CSS/SCSS, Twitter Bootstrap</li>
                    <li className="bullet">Webpack, Grunt, Gulp, Yeoman, NPM</li>
                    <li className="bullet">Databases: relational (orm), no-sql</li>
                    <li className="bullet">Docker, Heroku</li>
                    <li className="bullet">Networking skills</li>
                  </ul>
                </section>
                <section className="position-footer">
                  <Button
                    id='3'
                    callback={this.openDialog.bind(this)}
                    type="button"
                    className="nav-button"
                  >
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
            <Panel>
              <section className="career-position">
                <section
                  id="4"
                  className="position-header ui-ux"
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>UI/UX developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                <section className="position-text">
                  <h3>Requirements:</h3>
                  <ul className="bullets">
                    <li className="bullet">2+ years of experience in software development</li>
                    <li className="bullet">Solid experience in JS</li>
                    <li className="bullet">Development using micro-services architecture, JS, NodeJS, MySQL and Docker</li>
                    <li className="bullet">User friendly UI</li>
                    <li className="bullet">English skills intermediate or better</li>
                  </ul>
                  <h3>Technology stack:</h3>
                  <ul className="bullets">
                    <li className="bullet">Javascript (ECMAScript 6), NodeJS</li>
                    <li className="bullet">ReactJS, AngularJS, EmberJS</li>
                    <li className="bullet">CSS/SCSS, Twitter Bootstrap</li>
                    <li className="bullet">Webpack, Grunt, Gulp, Yeoman, NPM</li>
                    <li className="bullet">Databases: relational (orm), no-sql</li>
                    <li className="bullet">Docker, Heroku</li>
                    <li className="bullet">Networking skills</li>
                  </ul>
                </section>
                <section className="position-footer">
                  <Button
                    id='4'
                    callback={this.openDialog.bind(this)}
                    type="button"
                    className="nav-button"
                  >
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
          </Panel>
        </Content>
        {/* <MediaQuery query='(min-device-width: 768px)'>
          <Waves mode="black" registerAnimation={this.props.registerAnimation} />
        </MediaQuery> */}
        {this.props.children}
      </section>
    );
  }
}

export default routerAnimation(Careers);
