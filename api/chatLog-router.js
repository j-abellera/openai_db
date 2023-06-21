const express = require('express');
const Logs = require('./chatLog-model');
const router = express.Router();
const { checkLogId, checkPayload } = require('./chatLog-middleware');

router.get('/:id?', checkLogId, async (req, res, next) => {
    try {
        if(!req.params.id) {
            console.log('id not founds')
            const chatLog = await Logs.getChatLog();
            res.status(200).json({ message: 'chatLog successfully fetched', data: chatLog });
        } else {
            console.log('id found')
            res.status(200).json({ message: 'Log successfully fetched', data: req.log });
        }
    } catch(err) {
        next(err);
    }
});

router.post('/', checkPayload, async (req, res, next) => {
    try {
        const newLog = await Logs.addChat(req.chat);
        res.status(201).json({ message: 'Log successfully added', data: newLog });
    } catch(err) {
        next(err);
    }
});

router.delete('/delete/:option', checkLogId, async (req, res, next) => {
    try {
        Logs.remove(req.params.option)
            .then(rowsDeleted => {
                res.status(200).json({
                    message: req.params.option !== 'all'
                        ? `Log with ID ${req.params.option} removed successfully`
                        : `All ${rowsDeleted} logs have removed successfully`
                });
            });
    } catch (err) {
        next(err);
    }
});

router.use((err, req, res, next) => {
    if(err) {
        return res
            .status(err.status || 500)
            .json(
                { message: err.message || `An error has occured while making a ${req.method} to ${req.url}` }
            );
    }
})

module.exports = router;