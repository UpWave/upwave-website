import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

import Content from '../../components/Content';
import Panel from '../../components/Panel';
import routerAnimation from '../../components/common/components/routerAnimation';
import Button from '../../components/common/components/Button';
import positions from './assets/positions';

import '../../assets/stylesheets/careers.css';

class Careers extends React.Component {
  static propTypes = {
    registerAnimation: PropTypes.func.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  };

  get children() {
    if (!this.props.children) return this.props.children;

    return React.cloneElement(this.props.children, {
      toggleSidebar: this.props.toggleSidebar,
    });
  }

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
                  className={`position-header ${positions[0]['name'].replace('/', '-')}`}
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>{[positions[0]['level'], positions[0]['name']].join(' ')} developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                {positions[0]['body']}
                <section className="position-footer">
                  <Button
                    href='/careers/1'
                    type="buttonLink"
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
                  className={`position-header ${positions[1]['name'].replace('/', '-')}`}
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>{[positions[1]['level'], positions[1]['name']].join(' ')} developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                {positions[1]['body']}
                <section className="position-footer">
                  <Button
                    href='/careers/2'
                    type="buttonLink"
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
                  className={`position-header ${positions[2]['name'].replace('/', '-')}`}
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>{[positions[2]['level'], positions[2]['name']].join(' ')} developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                {positions[2]['body']}
                <section className="position-footer">
                  <Button
                    href='/careers/3'
                    type="buttonLink"
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
                  className={`position-header ${positions[3]['name'].replace('/', '-')}`}
                  onClick={this.openDialog.bind(this)}
                >
                  <h2>{[positions[3]['level'], positions[3]['name']].join(' ')} developer</h2>
                  <Button
                    type="button"
                    callback={e => { e.stopPropagation(); this.props.toggleSidebar(true); }}
                    className="nav-button"
                  >
                    Apply
                  </Button>
                </section>
                {positions[3]['body']}
                <section className="position-footer">
                  <Button
                    href='/careers/4'
                    type="buttonLink"
                    className="nav-button"
                  >
                    More details
                  </Button>
                </section>
              </section>
            </Panel>
          </Panel>
        </Content>
        {this.children}
      </section>
    );
  }
}

export default routerAnimation(Careers);
