
exports.up = function(knex) {
    return knex.schema.createTable('employees', function(table) {
        table.increments();
        table.string('name').notNullable();
        table.string('designation').notNullable();
        table.integer('dept_id').references('id').inTable('departments');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('employees');
};
