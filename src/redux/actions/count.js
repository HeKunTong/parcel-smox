const up = (state, data) => {
    state.count += data;
};

const down = (state, data) => {
    state.count -= data;
};

export {
    up,
    down
};