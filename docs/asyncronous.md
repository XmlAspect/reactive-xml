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

## Callback vs CallChain
There is a usual pattern of modifying the content of container initiated by event from container control.
```javascript
let container = document.getElementById("container-id");
container.querySelector("button.action").addEventListener("tap", ev => container.querySelector('.content').innerHTML="Clicked" );
```
Using CallChain with dom convenience methods code above will have no callback
```javascript
$css('#container-id').$on( 'tap', $css('button.action') ).$css('.content').html('Clicked');
```
In this code first `$css()` call creates callchain with context of container. 

`$on( )` is equivalent of event listener, which will pause the call chain execution till 'tap' event is fired. 

Usually event source is not same as container but resides inside. To define the source the artificial argument is passed 
to `$on()` call: `$css('button.action')`. Which defines the sub-scope inside of container.

The chain after `on('tap')` will be executed every time the event is fired. It will find '.content' and reset its html. 

Since tap event is bubbling, the scope on event call could be replaced by conditional chain execution:
```javascript
$css('#container-id').$on( 'tap' ).$if( ev=> ev.target.classList.contains('action') ).$css('.content').html('Clicked');
```



# then vs $then
The async chain always return the mixin of API wrapper and Promise. 

Promise interface gives API like then() 
