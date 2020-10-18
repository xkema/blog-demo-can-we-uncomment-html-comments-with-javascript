// identical for all versions: "v0.14.10", "v15.7.0", "v16.14.0"
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  // 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  // 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // 
  tick() {
    this.setState({
      date: new Date()
    });
  }
  // <div>
  //   <h2> Hello, world!
  //   <h3> Date
  render() {
    return (
      // div
      React.createElement(
        'div',
        { className: 'react-clock-component' },
        // div > h2
        React.createElement(
          'h2',
          null,
          'Hello, world!'
        ),
        // div > h3
        React.createElement(
          'h3',
          null,
          'It is ', this.state.date.toLocaleTimeString(), '.'
        )
      )
    );
  }
}

ReactDOM.render(
  React.createElement(Clock, null),
  document.getElementById('root')
);