import Item from './Item'

function List(){
    return(
        <div>
            <h1>Minha Lista</h1>
            <ul>
               <Item marca= 'Ferrari'/>
               <Item marca= 'Fiat'/>
            </ul>
        </div>
    )
}

export default List