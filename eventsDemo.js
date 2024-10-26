import { EventEmitter } from 'events';

// best for building for real time applications as aloows for building custo events

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hi ' + name);
}

function goodbyeHandler(name){
    console.log('GoodBye ' + name)
}

// handlers and listerns
// register event listeners
myEmitter.on('greet', greetHandler); // on greet Emitter call greethandler
myEmitter.on('goodbye', goodbyeHandler); // on bye Emitter call greethandler

// emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye','John');

// error handling
myEmitter.on('error', (err) => {
    console.log('An error occured: ', err);
});
// simulate error
myEmitter.emit('error', new Error('Some went wrong'));