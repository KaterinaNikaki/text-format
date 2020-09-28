let app = new Vue({
    el: '#test',
    data: {
        spcClass: '',
        stlClass: '',
        imgClass: '',
        sepPlaceClass: '',
        sepStyleClass: '',
        colorClass: ''
    },
    computed: {
        articleClasses: function () {
            return [
                this.spcClass,
                this.stlClass,
                this.imgClass,
                this.sepPlaceClass,
                this.sepStyleClass,
                this.colorClass
            ];
        }
    }
});