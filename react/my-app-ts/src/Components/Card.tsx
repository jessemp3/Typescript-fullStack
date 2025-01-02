interface ICard {
    id:number,
    title:string,
    url:string,

}

export const Card = ({id, title, url}:ICard) =>{
    return (
        <>
            <div className="card">
                <img src={url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card {id}</h5>
                    <p className="card-text">{title}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
};