import AyncChain from "../AsyncChain";

suite('AsyncChain', () =>
{
setup(()=>
{

});
teardown( ()=>
{

});
test('instantiating ', () =>
{
    debugger;
    AyncChain();
});

test('be executed in parallel asynchronous manner', () =>
{
    const stack = [];
    const p = AyncChain([1,2,3])
                .$then( x=> stack.push(x) )
                .promise().then( x=> assert.equal( stack.join(''), '0123') );
    stack.push(0); //
    return p;
});
test('interrupt-able', () =>
{

});
test('safe to re-start', () =>
{

});
test('limited parallelism, permitting only defined number processing threads a time. ', () =>
{

});

});
