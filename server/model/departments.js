const { Model } = require('objection');
const knex = require('../db/connection');

Model.knex(knex)


class Department extends Model {
  static get tableName() {
    return 'departments';
  }

  static get relationMappings() {
    const Employee = require('./employees')
    return {
        employees: {
            relation: Model.HasManyRelation,
            modelClass: Employee,
            join: {
                from: 'departments.id',
                to: 'employees.dept_id'
            }
        }
    }
  }
}

module.exports = Department;