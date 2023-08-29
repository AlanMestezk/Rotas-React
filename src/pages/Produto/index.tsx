
import {useParams} from 'react-router-dom'


export const Produto = ()=>{

    //para deixar a rota dinamica
    const {id} = useParams()

    return(
        <>
            <main>
                <h1>Grade de produtos</h1>
                <strong>Produto selecionado: {id}</strong>
            </main>
        </>
    )
}