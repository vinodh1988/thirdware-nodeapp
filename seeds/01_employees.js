
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {name: 'Aravind',designation:"Manager", dept_id:1},
        {name: 'Ratan',designation:"Clerk", dept_id:1},
        {name: 'John',designation:"Manager", dept_id:2},
        {name: 'Ram',designation:"Supervisor", dept_id:2},
        {name: 'Harry',designation:"Consultant", dept_id:3},
        {name: 'Joe',designation:"Consultant", dept_id:3},
      ]);
    });
};
