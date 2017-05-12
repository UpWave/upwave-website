import { withRouter, routerShape } from 'react-router';

function routerTransition(WrappedComponent, route) {
  return withRouter(class routerTransition extends WrappedComponent {
    static propTypes = {
      router: routerShape,
    };

    findRoute() {
      const { routes } = this.props;

      return routes[routes.length - 1];
    }

    routerWillLeave(nextLocation) {
      const isSubRoute = this.props.router.location.pathname.replace('/').split('/')[0] === nextLocation.pathname.replace('/').split('/')[0];
      const { isFreeToLeave } = this.state;

      if (isSubRoute) {
        window.setTimeout(this.setRouterHandler.bind(this), 0);

        return true;
      }

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
      this.setRouterHandler();
    }

    setRouterHandler() {
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
