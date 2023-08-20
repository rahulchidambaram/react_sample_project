import { connect } from "react-redux"

const ReduxExample = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1>ReduxExample</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
const mapState = (state) => ({
    count: state.count
})
const disptachingTheRequest = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
})

export default connect(mapState, disptachingTheRequest)(ReduxExample);

