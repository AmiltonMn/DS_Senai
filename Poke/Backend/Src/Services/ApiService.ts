import { APIURL } from "../Lib/Api";
import axios, { all } from "axios";
import { PokemonData } from "../Dtos/pokemonData";
import { Prisma } from '../Lib/Prisma'

class ApiService {
    static async GetPokemon(name?: string, id?: number) : Promise<any> {
        try {

            var response = {
                data: {
                    id: 0,
                    name: "",
                    capture_rate: 0,
                    base_happiness: 0,
                    is_baby: false,
                    is_legendary: false,
                    is_mythic: false,
                    color: ""
                }
            };

            if (name != undefined || name === "") {
                response = await axios.get(`${APIURL}/pokemon-species/${name}`)
            } else {
                response = await axios.get(`${APIURL}/pokemon-species/${id}`)
            }

            let data = response.data

            const imageResponse = await axios.get(`${APIURL}/pokemon/${data.id}`)
            const imageData = imageResponse.data

            let Poke : PokemonData = {
                Id: data.id,
                Name: data.name,
                CaptureRate: data.capture_rate,
                BaseHappiness: data.base_happiness,
                IsBaby: data.is_baby,
                IsLegendary: data.is_legendary,
                IsMythic: data.is_mythic,
                Image: imageData.sprites.front_default,
                Color: data.color
            }

            return Poke
        } catch (error) {
            console.log(`Ocorreu o seguinte erro ao pegar os dados do pokemon: ${error}`)
            return 
        }
    }

    static async SetAll() : Promise<any> {
        try {
            const response = await axios.get(`${APIURL}/pokemon-species?limit=1000000`)
            
            let data = response.data.results

            await data.forEach(async element => {
                let response = await axios.get(element.url)
                let data = response.data

                const imageResponse = await axios.get(`${APIURL}/pokemon/${data.id}`)
                const imageData = imageResponse.data

                await Prisma.pokemon.create({
                    data: {
                        Id: data.id,
                        Name: data.name,
                        Capture_rate: data.capture_rate,
                        Base_Happiness: data.base_happiness,
                        IsBaby: data.is_baby,
                        IsLegendary: data.is_legendary,
                        IsMythic: data.is_mythic,
                        Image: imageData.sprites.front_default,
                        Captured: false,
                        Color: data.color.name
                    }
                })
            });

            return Prisma.pokemon.findMany()
        } catch (error) {
            console.log(`Ocorreu um erro ao pegar os dados: ${error}`)
            return
        }
    }

    static async GetAll() : Promise<any> {
        try {
            return Prisma.pokemon.findMany()
        } catch (error) {
            return "Erro"
        }
    }
}

export default ApiService;