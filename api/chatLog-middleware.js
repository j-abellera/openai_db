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

module.exports = { checkLogId };