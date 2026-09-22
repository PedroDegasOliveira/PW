const Person = require('../models/Person')

module.exports = class PersonController {
  // CREATE - POST /person
  static async createPerson(req, res) {
    const { name, salary, approved } = req.body

    // validações simples, para simular o "mundo real"
    if (!name) {
      return res.status(422).json({ message: 'O nome é obrigatório!' })
    }
    if (salary === undefined || salary === null) {
      return res.status(422).json({ message: 'O salário é obrigatório!' })
    }

    const person = {
      name,
      salary,
      approved: approved ?? false,
    }

    try {
      const novaPessoa = await Person.create(person)
      res.status(201).json({
        message: 'Pessoa inserida no sistema com sucesso!',
        data: novaPessoa,
      })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao inserir pessoa no banco.', error })
    }
  }

  // READ (todas) - GET /person
  static async getAllPersons(req, res) {
    try {
      const people = await Person.find()
      res.status(200).json(people)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar pessoas.', error })
    }
  }

  // READ (uma pelo id) - GET /person/:id
  static async getPersonById(req, res) {
    const id = req.params.id

    try {
      const person = await Person.findOne({ _id: id })

      if (!person) {
        return res.status(404).json({ message: 'Pessoa não encontrada!' })
      }

      res.status(200).json(person)
    } catch (error) {
      res.status(422).json({ message: 'ID inválido!' })
    }
  }

  // UPDATE - PUT /person/:id
  static async updatePerson(req, res) {
    const id = req.params.id
    const { name, salary, approved } = req.body

    if (!name) {
      return res.status(422).json({ message: 'O nome é obrigatório!' })
    }
    if (salary === undefined || salary === null) {
      return res.status(422).json({ message: 'O salário é obrigatório!' })
    }

    const person = { name, salary, approved: approved ?? false }

    try {
      const updatedPerson = await Person.findOneAndUpdate({ _id: id }, person, {
        new: true, // retorna o documento já atualizado
      })

      if (!updatedPerson) {
        return res.status(404).json({ message: 'Pessoa não encontrada!' })
      }

      res.status(200).json({
        message: 'Pessoa atualizada com sucesso!',
        data: updatedPerson,
      })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar pessoa.', error })
    }
  }

  // DELETE - DELETE /person/:id
  static async deletePerson(req, res) {
    const id = req.params.id

    try {
      const person = await Person.findOne({ _id: id })

      if (!person) {
        return res.status(404).json({ message: 'Pessoa não encontrada!' })
      }

      await Person.deleteOne({ _id: id })

      res.status(200).json({ message: 'Pessoa removida do sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao remover pessoa.', error })
    }
  }
}
