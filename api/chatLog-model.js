const db = require('../data/db-config');

const getChatLog = () => {
    return db('public.chatLog');
}

const getLogById = (id) => {
    return db('public.chatLog')
        .where('id', id)
        .first();
}

const getLogs = (role) => {
    return db('public.chatLog')
        .where('role', role);
}


const addChat = (chat) => {
    db('public.chatLog')
        .insert(chat)
        .then(([id]) => getLogById(id));
}

const remove = (option) => {
    if(option === 'all') {
        return db('public.chatLog')
            .del()
            .then(rows => rows);
    } else {
        return db('public.chatLog')
            .where('id', option)
            .del()
            .then(rows => rows);
    }
}

module.exports = { getChatLog, addChat, getLogById, getLogs, remove };