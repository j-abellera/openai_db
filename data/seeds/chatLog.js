/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('chatLog').truncate()
  await knex('chatLog').insert([
    {
        "role": "system",
        "content": "You are a helpful assistant"
    }
]);
};
