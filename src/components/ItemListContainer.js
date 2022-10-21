import React from 'react'




function ItemListContainer(prop){
    return(
        <main className='Main'>   
            <div>
                <h1 className='textoProp'>Nombre: {prop.greeting}</h1>
            </div>
        </main>
    )
}

export default ItemListContainer