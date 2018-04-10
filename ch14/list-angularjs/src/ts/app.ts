import * as angular from 'angular';

import { RecommendedPlaces, Item } from './list'

namespace App {
    class MainController {

        public static $inject = [
            '$scope'
        ];

        constructor(private $scope) {

            $scope.title = "대구에서 유명한 것";
            let app = new RecommendedPlaces();
            let items: Array<Item> = new Array<Item>();

            items.push(new Item("수성유원지", 85));
            items.push(new Item("이월드", 80));
            items.push(new Item("안지랑 곱창 거리", 20));
            items.push(new Item("팔공산", 30));
            items.push(new Item("중앙로", 90));
            $scope.items = items;

            let nameBestPlace = app.getBestPlace(items);
            $scope.bestPlace = nameBestPlace;
        }
    }

    var app = angular.module("app", []);
    app.controller("MainController", MainController);
}

/*
컨트롤러 클래스가 controller 등록 메서드 보다 앞에 선언 돼야 있어야 함에 유의
*/