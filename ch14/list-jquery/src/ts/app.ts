import { RecommendedPlaces, Item } from './list'
import * as $ from 'jquery'

namespace App {
    $(function () {
        let app = new RecommendedPlaces();                
        let items: Array<Item> = new Array<Item>();

        items.push(new Item("수성유원지", 85));
        items.push(new Item("이월드", 80));
        items.push(new Item("안지랑 곱창 거리", 20));
        items.push(new Item("팔공산", 30));
        items.push(new Item("중앙로", 90));       

        let listHTML=app.getList(items);
        $("#list").html(listHTML);

        let nameBestPlace = app.getBestPlace(items);        
        $("#bestPlace").text(nameBestPlace);

    })
}