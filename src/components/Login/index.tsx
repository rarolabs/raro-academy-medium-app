import axios from "axios"
import React, { useState, ChangeEvent } from "react"
import { Button } from "../Button"
import { Input } from "../Input"
import { useNavigate } from "react-router-dom"

export const Login = () => {

  const navigate = useNavigate()
  const [login, setLogin] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [erro, setErro] = useState<string>("")

  const postLogin = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
    event.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post('http://3.221.159.196:3307/auth/login', { login, senha })
      localStorage.setItem('token', response.data.access_token)
      localStorage.setItem('id', response.data.id)
      navigate('/artigos')
    } catch (error: any) {
      if (error.response.data.statusCode === 401) {
        setErro('Usuário ou senha Inválidos');
      } else {
        setErro('Erro ao autenticar usuário. Tente novamente mais tarde.');
      }
      setLoading(false)
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
        <form className="mt-8 space-y-6" action="#" onSubmit={postLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-5">
              <Input
                type="text"
                name="login"
                label="Login"
                placeholder="login"
                required
                value={ login }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setLogin(e.target.value) }
              />
            </div>

            <div className="mt-5">
              <Input
                type="password"
                name="senha"
                label="senha"
                placeholder="********"
                required
                value={ senha }
                onChange={ (e: ChangeEvent<HTMLInputElement>) => setSenha(e.target.value) }
              />
            </div>
          </div>
          {erro && <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
            { erro }
          </span>}
          <div>
            <Button type="submit" disabled={loading}>{loading ? 'Carregando...' : 'Login'}</Button>
          </div>
        </form>
      </div>
    </div>
  )
};