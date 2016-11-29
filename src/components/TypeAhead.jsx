import React from 'react';

class TypeAhead extends React.Component {
  static propTypes = {
    sentence: React.PropTypes.string.isRequired,
    tag: React.PropTypes.string,
    startImmediately: React.PropTypes.bool,
  };

  static defaultProps = {
    tag: 'span',
    startImmediately: true,
  };

  static getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  get children() {
    const { children } = this.props;
    const { isCompleted } = this.state;

    if (!children) return children;

    switch (typeof children) {
      case 'string':
        return children;
      case 'object':
        if (children instanceof Array) {
          return children.map(child => React.cloneElement(child, {
            start: isCompleted,
          }));
        } else {
          return React.cloneElement(children, { startImmediately: isCompleted });
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
      }, () => setTimeout(this.blinkOut, 600));
    };

    this.blinkOut = () => {
      this.setState({
        value: this.state.value + '|',
      }, () => setTimeout(this.blinkIn, 600));
    };
  }

  componentDidMount() {
    if (this.props.startImmediately) this.startTyping();
  }

  componentWillReceiveProps(nextProps) {
    const { cursor, isStarted } = this.state;

    if (nextProps.startImmediately && !cursor && !isStarted) {
      this.setState({
        isStarted: true,
      }, () => this.startTyping());
    }
  }

  startTyping() {
    setTimeout(this.type, TypeAhead.getRandomValue(75, 150));
  }

  startBlinking() {
    setTimeout(this.blinkIn, 0);
  }

  render() {
    const Tag = this.props.tag;

    return (
      <Tag>
        {this.state.value}
        {this.children}
      </Tag>
    );
  }
};

export default TypeAhead;
