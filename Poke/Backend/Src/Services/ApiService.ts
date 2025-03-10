import { APIURL } from "../Lib/Api";
import axios from "axios";

class ApiService {
    static async GetPokemon(id?: number) : Promise<any> {
        try {
            const response = await axios.get(`${APIURL}/pokemon/${id}`)
            return response.data
        } catch (error) {
            console.log(`Ocorreu o seguinte erro ao pegar os dados do pokemon: ${error}`)
        }
    }
}

export default ApiService;