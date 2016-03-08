var TodoList = React.createClass({
  displayName: 'TodoList',

  render: function render() {
    var createItem = function createItem(item) {
      return React.createElement(
        'li',
        { key: item.id },
        item.text
      );
    };
    return React.createElement(
      'ul',
      null,
      this.props.items.map(createItem)
    );
  }
});
var todoapp = React.createClass({
  displayName: 'TodoApp',

  getInitialState: function getInitialState() {
    return { items: [], text: '' };
  },
  onChange: function onChange(e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{ text: this.state.text, id: Date.now() }]);
    var nextText = '';
    this.setState({ items: nextItems, text: nextText });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      // React.createElement(
      //   null,
      //   'TODO'
      // ),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement('input', { onChange: this.onChange, value: this.state.text }),
        React.createElement(
          'button',
          null,
          'Add #' + (this.state.items.length + 1)
        )
      )
    );
  }
});

// var about = React.createClass({
//   displayName: "About",

//   // getInitialState: function getInitialState() {
//   //   return { about: };
//   // },

//   render: function render(){
//     return React.createElement(
//       "div",
//       {className:"detail"},
//       "My Name is Alex"
//     );
//   }
// });

// var aboutinfo = React.CreateClass({
//   displayName: "Aboutinfo"

//   render:function render(){

//   }
// })

var timer = React.createClass({
  displayName: "Timer",

  getInitialState: function getInitialState() {
    return { secondsElapsed: 0 };
  },
  tick: function tick() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount: function componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function componentWillUnmount() {
    clearInterval(this.interval);
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Seconds Elapsed: ",
      this.state.secondsElapsed
    );
  }
});


ReactDOM.render(React.createElement(timer,null), document.getElementById('reacts0'));
ReactDOM.render(React.createElement(todoapp,null), document.getElementById('reacts1'));














