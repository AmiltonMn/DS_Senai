import { Prisma } from '../Lib/Prisma'


class UserService {
    static async CatchPokemon(Id: number) : Promise<any> {
        
        let pokemon = await Prisma.pokemon.findUnique(
            {
                where: {
                    Id: Id
                }
        })

        let Try = Math.floor(Math.random() * (255 - 1) + 1);

        if (pokemon === null)
            return null

        if (Try <= pokemon.Capture_rate) {
            Prisma.pokemon.update({
                where: {
                    Id: Id
                },
                data: {
                    Captured: true,
                    Tries: pokemon.Tries + 1
                }
            })
            return true
        }

        Prisma.pokemon.update({
            where: {
                Id: Id
            },
            data: {
                Tries: pokemon.Tries + 1
            }
        })
        return false
    }
}

export default UserService;