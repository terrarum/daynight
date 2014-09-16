define (require) ->
    logger = require("modules/logger")
    add: (x, y) ->
        logger.log "add"
        x + y

    subtract: (x, y) ->
        x - y

    divide: (x, y) ->
        x / y

    multiply: (x, y) ->
        x * y
