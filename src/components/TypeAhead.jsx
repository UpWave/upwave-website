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
    const { completed } = this.state;

    if (!children) return children;

    switch (typeof children) {
      case 'string':
        return children;
      case 'object':
        if (children instanceof Array) {
          return children.map(child => React.cloneElement(child, {
            start: completed,
          }));
        } else {
          return React.cloneElement(children, { startImmediately: completed });
        }
      default:
        return children;
    }
  }

  constructor() {
    super();

    this.state = {
      value: '',
      cursor: 0,
      completed: false,
    };

    this.type = () => {
      const { value, cursor } = this.state;
      const { sentence } = this.props;

      if (cursor >= sentence.length) {
        this.setState({
          completed: true,
        });

        return;
      }

      const nextCharacter = this.props.sentence[cursor];

      this.setState({
        value: value + nextCharacter,
        cursor: cursor + 1,
      }, this.startTyping);
    }
  }

  componentDidMount() {
    if (this.props.startImmediately) this.startTyping();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startImmediately && !this.state.cursor) {
      this.startTyping();
    }
  }

  startTyping() {
    setTimeout(this.type, TypeAhead.getRandomValue(75, 150));
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
