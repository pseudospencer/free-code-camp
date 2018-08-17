const state = [];

// mapStateToProps is used to map redux state to react props and specify exactly which values to monitor
// behind the scenes, mapStateToProps uses store.subscribe()
const mapStateToProps = (state) => {
  return { messages: state }
}
