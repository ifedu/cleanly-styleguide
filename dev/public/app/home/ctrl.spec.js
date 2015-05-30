// import {data} from '../../js/spec.config'

describe('Test', () => {
    beforeEach(() => angular.mock.module('styleguideWeb'))

    describe('HomeCtrl', () => {
        let ctrlAlias
        let scope

        beforeEach(inject(($injector) => {
            scope = $injector.get('$rootScope').$new()

            $injector.get('$controller')('HomeCtrl as homeCtrl', {
                $scope: scope
            })

            ctrlAlias = scope.homeCtrl

            scope.$digest()
        }))

        it('Home', () => {
            console.log(data)
            expect(ctrlAlias.home).toEqual('HOME')
        })
    })
})