/*
  Typical react-redux app structure:
  - single redux store manages state of entire app
  - react components subscribe to relevant pieces of data in store
  - dispatch actions directly from react components, triggering updates to store

  - need to use the react-redux package to make react and redux play nice together
      - this allows you to pass state and dispatch to react components as props
*/
class DisplayMessages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            messages: []
        }
    }
    render() {
        return <div / >
    }
};