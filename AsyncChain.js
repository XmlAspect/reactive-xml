class CallDeclaration
{
    CallDeclaration( prevCall ){ this.previousCall = prevCall; }
    $then(){ return new CallDeclaration(this); }
    promise()
    {
        return Promise.resolve(1)
    }

}
export default function AsyncChain( x )
{
    return new CallDeclaration();
}
