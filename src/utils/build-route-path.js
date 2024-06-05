export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<id>[a-z0-9\-_]+)') // ?<> = serve para noear o grupo

    const pathRegex = new RegExp(`^${pathWithParams}(<query>\\?(.*))?$`)

    return pathRegex

}