const db = require('../../data/db-config')


const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts');
}



const getById = id => {
  // select * from accounts where id = 1;
  return db('accounts').where('id', id).first()
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
 //raw sqel equivalent of this knex function ==>   // update accounts set name='foo' , budget=1000 where id= 1;
await db('accounts').where('id', id).update(account)
return getById(id)
}

const deleteById = id => {
  //delelte from accounts where id = 1;
return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
