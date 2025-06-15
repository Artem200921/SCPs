const { save, load } = require('./storage');

function init() {
  // Initialize any necessary components or configurations here
  console.log("Storage system initialized.");
}

// Example usage of the storage functions
const exampleData = { key: 'value' };
save('exampleKey', exampleData);
const loadedData = load('exampleKey');
console.log('Loaded data:', loadedData);

init();