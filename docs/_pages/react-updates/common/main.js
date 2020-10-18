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
  //   <h1> Hello, world!
  //   <h2> Date
  render() {
    return (
      // div
      React.createElement(
        'div',
        null,
        // div > h1
        React.createElement(
          'h1',
          null,
          'Hello, world!'
        ),
        // div > h2
        React.createElement(
          'h2',
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