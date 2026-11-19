

function Form(){
    function submissao(e){
        e.preventDefault()
      console.log('Submissão concluida')
    }


    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={submissao}>
               <div>
                <input type="text" placeholder="Digite o seu nome: "/>
               </div>
               <div>
                <input type="submit" value="Cadastrar" />
               </div>
            </form>
        </div>
    )
        
}

export default Form