'use strict';

console.log ('Loading function');

export.handler(event,context,callback) => {
	console.log('value 1 =',event.key1);
	console.log('value 2 =',event.key2);
	console.log('value 3 =',event.key3);
	callback(null,event.key2);

}