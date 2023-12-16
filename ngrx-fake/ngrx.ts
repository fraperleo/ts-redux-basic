// Fake NGrx lib
export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    (state: T, action: Action): T;
}

export class Store<T> {

    private state;

    constructor(private reducer: Reducer<T>, state: T) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    dispatch( action: Action) {
        this.state = this.reducer( this.state, action);
    }
}