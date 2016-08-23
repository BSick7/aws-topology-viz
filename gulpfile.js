var fs = require('fs'),
    typings = require('bower-typings'),
    allTypings = typings(),
    name = 'aws-topology-viz',
    meta = {
        name: name,
        src: [
            'typings/*.d.ts',
            '!app/lib/**/*.ts',
            'app/**/*.ts'
        ].concat(allTypings),
        serve: {
            port: 8000
        }
    };

fs.readdirSync('./gulp')
    .forEach(function (file) {
        require('./gulp/' + file)(meta);
    });