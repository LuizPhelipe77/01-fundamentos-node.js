

export function extractQueryParams(query) {
    return query.sebstr(1).split('&').reduce((queryParams, param)=> {
        const [kay, value] = param.split('=')
        
        queryParams[kay] = value

        return queryParams
    }, {})
}