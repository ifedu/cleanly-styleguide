angular
.module('styleguideWeb')
.provider('lazyLoader', function () {
    this.add = (resources) =>
        ['$q', ($q) => {
            let deferred = $q.defer()

            $script(resources, () => deferred.resolve())

            return deferred.promise
        }]

    this.$get = () => {}
})