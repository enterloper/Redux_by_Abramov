const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
	    return state + 1;
  	case 'DECREMENT':
	    return state - 1;
 		default:
	    return state;
  }
}

const { createStore } = Redux;
/*
THE ABOVE ON LINE 11 IS THE SAME AS THOSE ON 14 & 15
var createStore = Redux.createStore;
import { createStore } = from 'redux;
*/

/*
This store binds together the three principles of Redux. 1: It holds the current application's state object. 2: It lets you dispatch actions. 3: When you create it, you need to specify the reducer that tells how state is updated with actions.

In this example, we're calling createStore with "counter" as the reducer that manages the state updates. This store has three important methods.
*/
  const store = createStore(counter);
  console.log(store.getState());
/*
The first method of this store is called getState. It retrieves the current state of the Redux store. If we were on this, we're going to see 0 because this is the initial state of our application.

The second and the most commonly used store method is called dispatch. It lets you dispatch actions to change the state of your application. If we log this store state after dispatch, we're going to see that it has changed.

  store.dispatch({ type: 'INCREMENT' });
  console.log(store.getState());

store.subscribe lets you register a callback that the Redux store will call ANY TIME AN ACTION HAS BEEN DISPATCHED, so that you can update the UI of your application. It will reflect the current application state.
*/

const render = () => {
	document.body.innerText = store.getState();
}

store.subscribe(render)
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
})

/*
The rendering of below will not take place initially because it is called inside the subscribe function. For this reason we can extract the behavior into a function called render to get an initial rendering.
store.subscribe(() => {
   document.body.innerText = store.getState();
});
*/