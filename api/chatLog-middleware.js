const Logs = require('./chatLog-model');

const checkLogId = async (req, res, next) => {
    try {
        const { id } = req.params;
        if(!id)
            next();
        const log = await Logs.getLogById(id);
        if(!log)
            throw new Error('No Log by ID', id);
        req.log = log;
        next();
    } catch(err) {
        err.status = 404;
        next(err);
    }
}

const checkPayload = (req, res, next) => {
    try {
        const { role, content } = req.body;
        if(!role || !content)
            throw new Error('role and content are required');
        req.chat = req.body;
        next();
    } catch(err) {
        err.status = 400;
        next(err);
    }
}

module.exports = { checkLogId, checkPayload };