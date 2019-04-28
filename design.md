# Goal
Provide:
* Wrapper around object or prototype API to make it 
1. asynchronous
2. dot operator chainable, 
3. chain results available from within chain as callback parameters
4. interrupt/pause - able
5. destroy-able
6. repeatable/event-driven
7. accessing non-function members via set/get API
* Wrapper around collection to expose element API in fashion above and
1. async calls over collection elements call chain synchronised by awaitAll
2. splitting collection by callback condition
3. split parts execute own sub-chain similar to if-else
* Several most popular use cases: Array, NodeList from SelectorAll, jQuery
* Helpers to create other async chains and conveniance APIs
