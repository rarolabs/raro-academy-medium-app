import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../types/API";
import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function autenticaUsuario(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = "http://3.221.159.196:3307/auth/login"
    try {
      const response = await axios.post<Auth>(url, { login: login, senha: senha })
      if (response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("id", response.data.id.toString());
        navigate("/artigos")
      }
    }
    catch (erro: any) {
      if (erro.response.data.statusCode === 401) {
        setMensagem("Usuário ou senha Inválidos")
      }
    }



  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://rarolabs.com.br/assets/logo-cae9beb1976500005b5e29dea19bdaa2761082232703a16beb71ffd2117014e5.png"
            alt="Workflow"
          />
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={autenticaUsuario}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-5">
              <Input
                type="text"
                name="login"
                label="Login"
                placeholder="login"
                required
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <Input
                type="password"
                name="senha"
                label="senha"
                placeholder="********"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            {mensagem}
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
};

function access_token(arg0: string, access_token: any) {
  throw new Error("Function not implemented.");
}
function id(arg0: string, id: any) {
  throw new Error("Function not implemented.");
}

