const assert = require('assert');

const { SiliconFlowChatModel } = require('../dist/nodes/SiliconFlowChatModel/SiliconFlowChatModel.node.js');

assert(typeof SiliconFlowChatModel === 'function', 'SiliconFlowChatModel should be exported as a class');

const inst = new SiliconFlowChatModel();
assert(inst && typeof inst.description === 'object', 'instance should have a description object');
assert(inst.description.displayName === 'SiliconFlow Chat Model', 'displayName should match');
assert(typeof inst.supplyData === 'function', 'supplyData should be a function');

console.log('All tests passed');
