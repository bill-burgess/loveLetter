
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cardDirectory', function (table) {
    table.increments()
    table.string('name')
    table.integer('rank')
    table.string('img_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cardDirectory')
}
