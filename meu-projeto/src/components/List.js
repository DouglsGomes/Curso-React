import Item from './Item'

function List(){
    return(
        <div>
            <h1>Minha Lista</h1>
            <ul>
               <Item marca= 'Ferrari' ano_lancamento={1864}/>
               <Item marca= 'Fiat' ano_lancamento={2001}/>
            </ul>
        </div>
    )
}

export default List