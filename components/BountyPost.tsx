const BountyPost =({bounty}:any)=>{
    const formatAddress = (address:any) => {
      if (address.length === 42) {
        return address.substring(0, 6) + "..." + address.substring(38);
      } else {
        return address;
      }
    }
    const reduceAddress = (address:any) => {
        var f5 = address.substring(0, 5);
        var l4 = address.substring(address.length - 4);
        var result = f5 + "..." + l4;
        return result;
    }
return(
<div className="post">
<div className="top row">
    <div className="col-7">
        <h1 className="name">{formatAddress(bounty.owner)}</h1>
        <h2 className="username">{formatAddress(bounty.owner)}</h2>
    </div>
    <div className="col-5">
        <p className="timestamp">Ends: {bounty.liveUntil}</p>
    </div>
</div>
<div className="middle row">
    <div className="col-12">
        <p className="text">{bounty.description}</p>
    </div>
</div>
<div className="bottom row">
    <div className="col-6">
        <p className="prize">
            ${bounty.prize} USD as a prize
        </p>
    </div>
    <div className="col-6 text-end">
        <a href="../Bounty" className="btn-type-1">
            View bounty
        </a>
    </div>
</div>
</div>
)
}
export default BountyPost
