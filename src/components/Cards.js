let Icon = "../image/Star 1.png";
// export default function Cards ( { image, rating, title, price } );
export default function Cards ( props )
{
  
    let sold;
    if(props.count==0){
        sold="Sold Item";
    }else if(props.count =="on"){
        sold="Online";
    }
    return (
        <div className="card">
            <img className="card--img" src={ `../image/${ props.image }.png`  } alt="img"  />
            {/* { props.sold && <span className="sold">{ props.sold }</span> } */ }
            { sold && <span className="sold" >{sold}</span>}
            <div className="card--info">
                <img src={ Icon } alt="" className="card--star" />
                <span> { props.rating } </span>
                <span className="gray">({ props.review }) . </span>
                <span className="gray">{ props.location }</span>
            </div>
            <p>{ props.title } </p>
            <p><span className="fw-bold">From ${ props.price }</span> / person</p>
        </div>
    );
}