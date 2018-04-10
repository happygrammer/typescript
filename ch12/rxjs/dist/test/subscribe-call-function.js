var Rx = require('@reactivex/rxjs');
class DeliveryComponent {
    makeFullName(res) {
        /*
        let data = res.json();
        this.order = data.result;
        for(let key in this.order){
            this.order[key].fullName = this.order[key].firstName + ' ' this.order[key].lastName;
        }
        */
        console.log(res);
        return res;
    }
    clicked() {
        const $banana = Rx.Observable.of('사과');
        $banana.subscribe(this.makeFullName);
    }
    clicked2() {
        const $banana = Rx.Observable.of('딸기');
        $banana.subscribe(res => {
            this.makeFullName(res);
        });
    }
}
var dc = new DeliveryComponent();
dc.clicked();
dc.clicked2();
/*
사과
딸기
*/ 
