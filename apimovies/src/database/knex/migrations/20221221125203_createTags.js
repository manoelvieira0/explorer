exports.up = knex => knex.schema.createTable("tags", table => { // Criar a tabela
  table.increments("id")
  table.text("name")// Para não permitir nulo
  table.integer("user_id").references("id").inTable("users") // Referência a tabela de usuários
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE") // Para deletar a tag ao remover a nota

});

exports.down = knex => knex.schema.dropTable("tags") // Deletar tabela
