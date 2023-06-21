const db = require('../data/db-config');

const getChatLog = () => {
    return db('chatLog');
}

const getLogById = (id) => {
    return db('chatLog')
        .where('id', id)
        .first();
}

const getLogs = (role) => {
    return db('chatLog')
        .where('role', role);
}


const addChat = (chat) => {
    db('chatLog')
        .insert(chat)
        .then(([id]) => getLogById(id));
}

const remove = (option) => {
    if(option === 'all') {
        return db('chatLog')
            .del()
            .then(rows => rows);
    } else {
        return db('chatLog')
            .where('id', option)
            .del()
            .then(rows => rows);
    }
}

module.exports = { getChatLog, addChat, getLogById, getLogs, remove };