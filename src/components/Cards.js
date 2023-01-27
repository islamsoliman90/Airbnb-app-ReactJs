import Icon from "../image/Star 1.png";
// export default function Cards ( { image, rating, title, price } );
export default function Cards ( props )
{
    return (
        <div className="card">
            <img src={ props.image } alt="img" className="card--img" />
            {/* { props.sold && <span className="sold">{ props.sold }</span> } */ }
            <span className="sold" style={ { display: props.sold ? "block" : "none" } }>{ props.sold }</span>
            <div className="card--info">
                <img src={ Icon } alt="" className="card--star" />
                <span> { props.rating } </span>
                <span className="gray">({ props.review }) . </span>
                <span className="gray">{ props.country }</span>
            </div>
            <p>{ props.title } </p>
            <p><span className="fw-bold">From ${ props.price }</span> / person</p>
        </div>
    );
}