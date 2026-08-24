import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('name', 100).notNullable()
      table.string('nickname', 100).nullable()
      table.enum('course', ['INFO', 'MEC', 'MAMB', 'PROD', 'TADS', 'TGA']).notNullable()
      table.smallint('class_year').unsigned().notNullable()
      table.date('birth_date').notNullable()
      table.integer('created_by').unsigned().notNullable()
      table.foreign('created_by').references('users.id')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
