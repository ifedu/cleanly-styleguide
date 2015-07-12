module.exports = {
    jsFilters: [{
        code: '{{ data | capitalize } }',
        result: '{{ "HOLA MUNDO" | capitalize }}',
        title: 'Capitalize: Cambia la primer letra por mayúscula'
    }, {
        code: '{{ data | importe } }',
        result: '{{ 800 | importe }}',
        title: 'Importe: Coloca decimales y simbolos (dolar, euro...)'
    }, {
        code: '{{ data | porcentaje } }',
        result: '{{ 800 | porcentaje }}',
        title: 'Percent: Coloca el símbolo de porcentaje al final del importe'
    }],

    jadeMixins: {
        routes: [{
            state: 'step1',
            name: '1-Ingresa los datos'
        }, {
            state: 'step2',
            name: '2-Revisa y autoriza'
        }, {
            state: 'step3',
            name: '3-Resultado'
        }]
    },
    accordionBox: {
        accordionName: {
            open: true
        },
    },
    pagination: {
        currentPage: 1,
        limit: 5,
        pageSize: 10
    }
}