import SarNet from '../../assets/SarNet.svg'; 
import './login.css';

export function Login() {
  return (
    <div className="container">
        <header className="header">
            <img src={ SarNet} alt="sarnet" />
            <span>Sistema de agendamento de reuniões</span>
        </header>

        <form>
            <div className="inputContainer">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome"/>
            </div>

            <div className="inputContainer">
                <label htmlFor="codAcess">Codigo de acesso</label>
                <input type="text" id="codAcess" name="codAcess" placeholder="Digite o codigo de acesso"/>
            </div>

            <a href="">Criar sua planilha de reuniões</a>

            <button className="button">
                Acessar 
            </button>
        </form>  

    </div>
  );
}
export default Login;