import Pessoa from '../models/cliente.js'

class ServicePessoa {

    async Buscar() {
        return Pessoa.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Pessoa.BuscarUm(id)
    }
    
    async Criar(nome, idade) {
        if(!nome) {
            throw new Error("Favor informar o nome")
        }
        
        await Pessoa.create({ nome, idade })
    }
    
    async Alterar(id, nome) {
        if(!id || isNaN(id) || !nome) {
            throw new Error("Favor informar todos os dados")
        }
        const pessoaAlterar = await Pessoa.findByPk(id)
        if(!pessoaAlterar){
            throw new Error("pessoa não encontrada")
        }
        
        pessoaAlterar.nome = nome
        await pessoaAlterar.save()
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        
        const pessoaDelete = await Pessoa.findByPk(id)

        if(!pessoaDelete){
            throw new Error("Favo informar o ID corretamente")
        }

        await Pessoa.Delet.destroy()
    }
    
}

export default new ServicePessoa()