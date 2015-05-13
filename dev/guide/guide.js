(() => {
    angular
    .module('guideStyleCleanly')
    .controller('GuideCtrl', GuideCtrl);

    function GuideCtrl() {
        this.view = (type) => {
            this.selection = type;
        };
    }
}());