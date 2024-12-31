interface ICard {
    id:number
}

export const Card = ({id}:ICard) =>{
    return (
        <>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPZGDfAQ2gPTdsXl5Qw_rwxKEpLKG5ts9qg&s" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card {id}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
};