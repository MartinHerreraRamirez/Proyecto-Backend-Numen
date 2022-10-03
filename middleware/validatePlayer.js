const {check, validationResult, body} = require('express-validator')

exports.validatePlayer = [
    check('name').not().isEmpty().withMessage('The field is empty').isLength({max:25, min:3}).withMessage('The Name must have between 3 and 25 characters'),
    check('surname').not().isEmpty().withMessage('The field is empty').isLength({max:25, min:3}).withMessage('The Surname must have between 3 and 25 characters'),
    check('shirtNumber').not().isEmpty().withMessage('The field is empty').isLength({max:3, min:1}).withMessage('The Shirt Number must have between 1 and 3 numbers'),
    check('team').not().isEmpty().withMessage('The field is empty').isLength({max:15, min:7}).withMessage('The Team must have between 7 and 15 characters')       
]

