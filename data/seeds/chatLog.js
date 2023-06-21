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
    },
    {
        "role": "user",
        "content": "What is the deepest part of the ocean?"
    },
    {
        "role": "user",
        "content": "What is the tallest mountain?"
    }
]);
};
