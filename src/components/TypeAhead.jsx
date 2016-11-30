import React from 'react';

class TypeAhead extends React.Component {
  static propTypes = {
    sentence: React.PropTypes.string.isRequired,
    tag: React.PropTypes.string,
    startImmediately: React.PropTypes.bool,
    skipAnimation: React.PropTypes.bool,
  };

  static defaultProps = {
    tag: 'span',
    startImmediately: true,
    skipAnimation: false,
  };

  static getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  typeTimeout = 0;
  blinkTimeout = 0;

  get children() {
    const { children, skipAnimation } = this.props;
    const { isCompleted } = this.state;

    if (!children) return children;

    switch (typeof children) {
      case 'string':
        return children;
      case 'object':
        if (children instanceof Array) {
          return children.map(child => React.cloneElement(child, {
            skipAnimation,
            start: isCompleted,
          }));
        } else {
          return React.cloneElement(children, {
            skipAnimation,
            startImmediately: isCompleted
          });
        }
      default:
        return children;
    }
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.children ? '|' : '',
      cursor: 0,
      isStarted: false,
      isCompleted: false,
      isBlinking: false,
    };

    this.type = () => {
      const { value, cursor } = this.state;
      const { sentence } = this.props;

      if (cursor >= sentence.length) {
        this.setState({
          isCompleted: true,
        });

        if (!this.children) {
          this.setState({
            startBlinking: true,
          }, () => this.startBlinking());
        } else {
          this.setState({
            value: value.slice(0, -1),
          });
        }

        return;
      }

      const nextCharacter = this.props.sentence[cursor];

      this.setState({
        value: value.slice(0, -1) + nextCharacter + '|',
        cursor: cursor + 1,
      }, this.startTyping);
    }

    this.blinkIn = () => {
      this.setState({
        value: this.state.value.slice(0, -1),
      }, () => this.blinkTimeout = setTimeout(this.blinkOut, 600));
    };

    this.blinkOut = () => {
      this.setState({
        value: this.state.value + '|',
      }, () => this.blinkTimeout = setTimeout(this.blinkIn, 600));
    };
  }

  componentDidMount() {
    const { startImmediately, skipAnimation } = this.props;

    if (!skipAnimation && startImmediately) this.startTyping();
  }

  componentWillReceiveProps(nextProps) {
    const { cursor, isStarted } = this.state;

    if (nextProps.startImmediately && !cursor && !isStarted) {
      this.setState({
        isStarted: true,
      }, () => this.startTyping());
    }
  }

  componentWillUnmount() {
    clearTimeout(this.typeTimeout);
    clearTimeout(this.blinkTimeout);
  }

  startTyping() {
    this.typeTimeout = setTimeout(this.type, TypeAhead.getRandomValue(75, 150));
  }

  startBlinking() {
    this.blinkTimeout = setTimeout(this.blinkIn, 0);
  }

  render() {
    const Tag = this.props.tag;
    const { skipAnimation } = this.props;

    return (
      <Tag>
        {skipAnimation ? this.props.sentence : this.state.value}
        {this.children}
      </Tag>
    );
  }
};

export default TypeAhead;
