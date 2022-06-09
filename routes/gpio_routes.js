const express = require('express');
const os = require('os');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.post('/set', body('gpio').isNumeric(), body('status').isBoolean(), (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (os.platform() != 'linux') {
        return res.status(400).json({
            type: 'error',
            message: 'This endpoint is only available on Linux',
        });
    }

    const Gpio = require('onoff').Gpio;
    const pin = new Gpio(req.body.gpio, 'out');
    pin.writeSync(req.body.status);
    pin.unexport(); // Free resources of pin

    res.status(200).json({
        type: 'success',
        gpio: req.body.gpio,
        status: req.body.status,
    });
});

module.exports = router;
