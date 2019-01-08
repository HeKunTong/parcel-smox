import { Smox }  from 'smox';
// import actions from '../actions';

// console.log(actions);

const state = {
    count: 1
};

const actions = {
    up(state, data) {
        state.count += data
    },
    down(state, data) {
        state.count -= data
    }
};

const effects = {
    async upAsync(actions, data) {
        await new Promise(t => setTimeout(t, 1000));
        actions.up(data)
    }
};

export default new Smox({ state, actions, effects });

