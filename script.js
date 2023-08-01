'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'fff',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

/* data.forEach(blockObj => {
    const block = document.createElement(blockObj.tag);

    // if (!blockObj.id) throw 'error';
    // if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
})

// const err = new Error('fdvbjdbjgbnd');
// ReferenceError, TypeError и другие 
// Можно создавать свои слассы ошибок
const err = new SyntaxError('fdvbjdbjgbnd');
console.log(err.name, err.message, err.stack); */

try {
    data.forEach((blockObj,i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch(e) {
// console.log(e.name);
if (e.name === "SyntaxError") {
    console.log(e.message);
} else throw e;
// console.error(e.name);
// console.log(e.message);
// console.log(e.stack);
}
// const err = new SyntaxError('fdvbjdbjgbnd');
// console.log(err.name, err.message, err.stack);