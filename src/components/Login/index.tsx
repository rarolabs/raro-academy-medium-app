import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {
  const [ login, setLogin ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ loading, setLoading ] = useState(false)
  const [ erro, setErro ] = useState("")

  const navigate = useNavigate()
  
  async function handleAuthUser (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErro('')
    setLoading(true)

    try {
      const url = "http://3.221.159.196:3307/auth/login"
      const response = await axios.post(
        url, 
        {login, senha}
        )
        
      const { access_token, id } = response.data
      if (access_token) {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", id);
        navigate("/artigos");
      } 
    } catch (error: any) {
      if (error.response.data.statusCode === 401) {
        setErro('Usuário ou senha Inválidos');
      } else {
        setErro('Erro ao autenticar usuário. Tente novamente mais tarde.');
      }
    }

    setLoading(false)  
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
        <form 
          className="mt-8 space-y-6"
          action="#"
          onSubmit={ handleAuthUser }
          >
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-5">
              <Input
                type="text"
                name="login"
                label="Login"
                placeholder="login"
                required
                value= {login}
                onChange={ (event) => setLogin(event.target.value) }
              />
            </div>

            <div className="mt-5">
              <Input
                type="password"
                name="senha"
                label="senha"
                placeholder="********"
                required
                value= {senha}
                onChange={ (event) => setSenha(event.target.value) }
              />
            </div>
            {
              erro ? (
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                  { erro }
                </span>
              ) : <></>
            }
          </div>
          <div>
            <Button 
              disabled= {loading}
              type="submit" >
              {  loading ?  "Carregando..." : "Login" }
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
};