# Reactive API
"Reactive" in project refers to ability to run the execution chain on one or recurrent events. 
The asynchronous and synchronous methods are mixed together in such execution chain. 

Usually there is a need to work with more than one object with own APIs. The chain could be extended with methods of additional objects.
In case of same method names for different objects the argument list allows to pick the object for following method invocation.

The chain is starting with wrapping the object or collection API
```javascript
import {Async, ChainParam} from "@xmlaspect/reactive-xml";

Async( window ) // single object wrapped
    .addEventListener('click')
    .$then( ev=>ev.screenX )
    .$then( x=>console.log(x) );
    
Async( document.querySelectorAll('input') )       // NodeList API 
    .setAttribute( 'title', 'click is trackable' )// initial value
    .addEventListener('click')                    // further chain will be triggered after click
        .$then( ev=>`clicked X: ${ev.screenX}` )  // convert event parameter to string
        .setAttribute( 'title', ChainParam(1) );  // update title with value from previous call 
// todo multiple objects in Async initialization and inside of chain        
```

# then vs $then
The async chain always return the mixin of API wrapper and Promise. 

Promise interface gives API like then() 
