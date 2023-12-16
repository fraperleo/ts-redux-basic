import { Store } from "./ngrx-fake/ngrx";
import { incrementadorAction, decrementadorAction, multiplicarAction, resetAction, dividirAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

const store = new Store( contadorReducer, 10);
console.log( store.getState() );

store.dispatch(incrementadorAction);
console.log( store.getState() );

store.dispatch(decrementadorAction);
console.log( store.getState() );

store.dispatch(multiplicarAction);
console.log( store.getState() );

store.dispatch(dividirAction);
console.log( store.getState() );

store.dispatch(resetAction);
console.log( store.getState() );
