export const click = (el) => {
    let ev = document.createEvent('MouseEvent')

    ev.initMouseEvent(
        'click',
        true /* bubble */ , true /* cancelable */ ,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/ , null
    )

    el.dispatchEvent(ev)
}

export const resolve = (resolveData, q) => {
    let defer = q.defer()

    defer.resolve(resolveData)
    return defer.promise
}