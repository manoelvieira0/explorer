const knex = require("../database/knex")

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body
    const { user_id } = request.params

    const note_id = await knex("notes").insert({ // Armazenando o id da nota que foi cadastrada.
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => { // Para percorrer cada Tag
      return {
        note_id,
        name,
        user_id
      }
    })

    await knex("tags").insert(tagsInsert) // Inserindo as Tags

    response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const note = await knex("notes").where({ id }).first() // Selecionar a nota de acordo com o ID
    const tags = await knex("tags").where({ note_id: id }).orderBy("name") //  Listando as tags da nota do id em ordem alfabética

    return response.json({
      ...note,
      tags
    })
  }

  async delete(request, response) {
    const { id } = request.params
    await knex("notes").where({ id }).delete()
    return response.json()
  }

  async index(request, response) {
    const { user_id } = request.query

    const notes = await knex("notes")
      .where({ user_id }).orderBy("title")

    return response.json({notes})
  }
}

module.exports = NotesController