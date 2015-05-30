angular
.module('styleguideWeb')
.controller('GuideCtrl', function () {
    this.view = (type) => {
        this.selection = type
    }
})