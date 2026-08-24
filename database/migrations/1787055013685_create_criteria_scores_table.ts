import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'criteria_scores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('student_id').notNullable()
      table.string('criteria_key', 50).notNullable()
      table.tinyint('score').unsigned().notNullable()
      table.integer('evaluated_by').unsigned().notNullable()
      table.foreign('student_id').references('students.id').onDelete('CASCADE')
      table.foreign('evaluated_by').references('users.id')
      table.unique(['student_id', 'criteria_key', 'evaluated_by'])
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
