angular
.module('styleguideWeb')
.provider('lazyLoader', () => {
    return {
        add(resources) {
            return ($q) => {
                let deferred = $q.defer()

                $script(resources, () => deferred.resolve())

                return deferred.promise
            }
        },

        $get() {}
    }
})