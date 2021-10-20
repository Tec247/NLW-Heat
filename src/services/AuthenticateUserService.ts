import axios from "axios"; 
/**
 * Receber o code(string)
 * Recuperar o access_token no github
 * Verificar se o usuario existe no DB
 * ----sim  = Gera um token para
 * ----Não  = Cria no DB, ger um token para
 * Retorna o token com as infos do user
 */
class AuthenticateUserService{
  async execute(code: string){
    const url = "https://github.com/login/oauth/access_token";

    const res = await axios.post(url,null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept":"application/json"
      }
    })
    return res.data;
  }
}
export { AuthenticateUserService };