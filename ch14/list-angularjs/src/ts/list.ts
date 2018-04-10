import * as _ from 'underscore';

export class Item {
    constructor(public name: string, public point: number) { }
}
export class RecommendedPlaces {   

    getBestPlace(items: Array<Item>): string {
        let bestPlace = _.max(items, function (i) { return i.point });
        return bestPlace.name;
    }
    
}

/*
getList(items: Array<Item>): string { ... }에 해당하는 생성은 템플릿에서 수행했기 때문에 삭제
*/