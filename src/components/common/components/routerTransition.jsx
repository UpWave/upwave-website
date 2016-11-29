import { withRouter, routerShape } from 'react-router';

function routerTransition(WrappedComponent, route) {
  return withRouter(class extends WrappedComponent {
    static propTypes = {
      router: routerShape,
    };

    findRoute() {
      return this.props.router.routes[1];
    }

    routerWillLeave(nextLocation) {
      const { isFreeToLeave } = this.state;

      if (isFreeToLeave) return isFreeToLeave;

      this.setState({
        nextLocation,
      });

      this.transitionShouldStart(this.routerCallback);

      return isFreeToLeave;
    }

    routerCallback = () => {
      this.setState({
        isFreeToLeave: true,
      }, () => this.props.router.push(this.state.nextLocation));
    }

    componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.findRoute(),
        this.routerWillLeave.bind(this),
      );

      this.setState({
        nextLocation: '',
        isFreeToLeave: false,
      });
    }

    render() {
      return super.render();
    }
  });
}

export default routerTransition;
