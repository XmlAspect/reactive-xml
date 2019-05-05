# Call Chain

Dot call notation `a().b().c()` represents *call chain*. It is useful in case when each method returns actionable object.

Samples of call chain include Array operations or Promise:
```javascript
[1,2,3].map(x=>'0'+x).filter( x => x>1 )...
fetch('/my/url').then( resp => resp.json() ).then(...).catch(...)...
```

CallChain wraps all methods of object to return same wrapped object.
```javascript
import CallChain from '@xmlaspect/reactive-xml/callchain';
const log = x => console.log(x) 
,     obj = { a: ()=>log(1), b: ()=>log(2), c: ()=>log(3) };
CallChain( obj ).a().b().c(); // output to console 1 2 3
```

# CallResult  
The return values of call chain methods could be passed as parameters to chain methods using   
`CallResult(index)`.

The primary advantage is omitting the temporary variables, need to track them.

## Absolute indexing
`CallResult( i )` refers to the return value of first method call:
```javascript
import CallChain from '@xmlaspect/reactive-xml/callchain';
import CallResult from '@xmlaspect/reactive-xml/callresult';
const log = (a,b) => console.log( `${a}(${b})` ) 
,     obj = { a: x => log('a',x) || x , b: x => log('b',x) || x , c: x => log('c',x) || x };
CallChain( obj ).a(10).b( CallResult(1) ).c(30); // a(10) b(10) c(30)
```
`CallResult(0)` returns the initial CallChain object 

## Relative indexing
```javascript
CallChain( obj ).a(1).b( CallResult(-1) ).c( CallResult(-1) ); // a(1) b(1) c(1)
CallChain( obj ).a(1).b( 2 ).c( CallResult(-1) ).b( CallResult(-3) ); // a(1) b(2) c(2) b(1)
```

## Named reference
Of course the chain parts could be referenced as JS variable. 
```javascript
const $a = CallChain( obj ).a(10);
$a.b( 21 ).c(31); // continue the chain
$a.c( 22 ).b(32); // another branch will be executed only after branch above
// output a(10) b(21) c(31) c(22) b(32)
```
 
 In CallChain each call also could be named by adding additional argument `CallResult.tag(tagName)` to call arguments.
 Its value is not passed to call.  
```javascript
CallChain( obj ).a( 10, CallResult.tag("a_tag") ).b(20).c( CallResult("a_tag") );// 1 10 2 20 30
```  


