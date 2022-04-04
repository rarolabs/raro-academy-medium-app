import axios from "axios";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {

  const navigate = useNavigate();
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>('');

  const postLogin = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('http://3.221.159.196:3307/auth/login', { login, password })
      localStorage.setItem('token', response.data.access_token)
      localStorage.setItem('id', response.data.id)
      navigate('/artigos')
    } catch (err: any) {
      if (err.response.data.statusCode === 401) {
        setErr('Usuário ou senha inválidos!')
      } else {
        setErr('Usuário não autenticado.')
      }
      setLoading(false)
    }
  };

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
        <form className="mt-8 space-y-6" action="#">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-5">
              <Input
                type="text"
                name="login"
                label="Login"
                placeholder="login"
                value={ login }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                required
              />
            </div>

            <div className="mt-5">
              <Input
                type="password"
                name="senha"
                label="senha"
                placeholder="********"
                value={ password }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) }
                required
              />
            </div>
          </div>
          {err && <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"> { err } </span>}
          <div>
            <Button type="submit" disabled={loading}>{loading ? 'Carregando...' : 'Login'}</Button>
          </div>
        </form>
      </div>
    </div>
  )
};