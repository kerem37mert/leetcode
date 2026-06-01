type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let n = init;
    
    const increment = () => ++n;
    const decrement = () => --n;
    const reset =  () => {
        n = init;
        return n;
    }

    const counter: Counter = {
        increment,
        decrement,
        reset,
    };

    return counter;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */