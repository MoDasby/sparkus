import './style.css';

export const LoginForm = () => {
    return (
       <form className="login-form">
           <h2>
               Sparkus
           </h2>

           <h2>
               Faça login ou crie uma conta
           </h2>

           <input
               placeholder="Usuário"
               className="form-input"
           />

           <input
               placeholder="Senha"
               className="form-input"
           />
           <div className="btn-wrapper">
               <button className="btn btn__secondary" >Criar Conta</button>
               <button className="btn" >Entrar</button>
           </div>

       </form>
    )
}