# Stats singleton.
# Used for adding information to be tracked to the stats bar.

define (require) ->
    console.log "Require Stat Partials"
    StatTemplate = require 'views/partials/stat'

    class Stats
        constructor: ->
            console.log "Stats Constructor"
        instance = null

        @getInstance: ->
            console.log "Get Stats Instance"
            instance ?= new PrivateClass
#            console.log "Stat:", StatTemplate

        class PrivateClass
            constructor: ->
                console.log "Stats Internal Constructor"
                console.log "Stat:", StatTemplate

            stats: {}

            # Stat model.
            # TODO create actual model.
            stat: (id, title, value) ->
                id: id
                title: title
                value: value

            # Add the given information to the list of stats.
            log: (id, title, value) ->
                if !@stats[id]?
                    $('body').append(StatTemplate({name: 'James'}));
                    $('.js-stats').append('<div class="' + id + '">' + title + ': ' + value + '</div>')
                @stats[id] = @stat(id, title, value)

            render: ->
                if Object.keys(@stats).length > 0
                    for key, stat of @stats
                        $('.' + stat.id).html(stat.title + ': ' + stat.value)