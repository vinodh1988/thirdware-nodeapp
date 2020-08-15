const { Model } = require('objection');
const knex = require('../db/connection');

Model.knex(knex)

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }

  static get relationMappings() {
    const Department = require('./departments')
    return {
        department: {
            relation: Model.BelongsToOneRelation,
            modelClass: Department,
            join: {
                from: 'employees.dept_id',
                to: 'departments.id'
            }
        }
    }
}
}

module.exports = Employee;