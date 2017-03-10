import React from 'react';

import Waves from '../components/Waves';
import Content from '../components/Content';
import Panel from '../components/Panel';
import routerAnimation from '../components/common/components/routerAnimation';
import Button from '../components/common/components/Button';

import '../assets/stylesheets/careers.css';

class Careers extends React.Component {
  static propTypes = {
    registerAnimation: React.PropTypes.func.isRequired,
  };

  openDialog() {

  }

  render() {
    return (
      <section className="container">
        <Content
          name="careers"
          registerAnimation={this.props.registerAnimation}
          className="box careers-box"
        >
          <Panel isContainer={true}>
            <Panel className="panel-expanded">
              <section className="career-position">
                <section className="position-header ruby">
                  <h2>Senior Ruby developer</h2>
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
                  <Button callback={this.openDialog.bind(this)} type="button">
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
            <Panel className="panel-collapsed">
              <section className="career-position">
                <section className="position-header ruby">
                  <h2>Junior Ruby developer</h2>
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
                  <Button callback={this.openDialog.bind(this)} type="button">
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
          </Panel>
          <Panel isContainer={true}>
            <Panel className="panel-collapsed">
              <section className="career-position">
                <section className="position-header ui-ux">
                  <h2>UI/UX developer</h2>
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
                  <Button callback={this.openDialog.bind(this)} type="button">
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
            <Panel className="panel-expanded">
              <section className="career-position">
                <section className="position-header js">
                  <h2>Javascript developer</h2>
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
                  <Button callback={this.openDialog.bind(this)} type="button">
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
          </Panel>
        </Content>
        <Waves mode="black" registerAnimation={this.props.registerAnimation} />
      </section>
    );
  }
}

export default routerAnimation(Careers);
