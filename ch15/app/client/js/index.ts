import * as $ from 'jquery'
import Item from "../../common/types/Item";
import * as template from "../../common/template";
import * as validator from "../../common/validator";
import * as Iresponse from "../../common/types/Iresponse";

namespace Main.IndexPage {
    
    $(function () {
        $('#form').hide();
        $('#openForm').on("click", function () {
            if ($('#form').is(':visible')) {
                $('#item-list').show();
                $('#form').hide();
            } else {
                $('#item-list').hide();
                $('#form').show();
                $('#siteTitle').focus();
            }
        });

        $('#btnSave').on("click", function () {
            if (validator.isURL($('#siteURL').val())) {

                let siteTitle = $("#siteTitle").val();
                let siteIntro = $("#siteIntro").val();
                let siteURL = $("#siteURL").val();
                let inputItem: Item = { title: siteTitle, intro: siteIntro, url: siteURL };

                $.post("/add", { item: inputItem }, function (data: Iresponse.IresponseItem) {
                    let arr: Item[] = [];
                    arr.push(data.item);
                    let itemHTML: string = template.getItemTemplate(arr);
                    $('.col-xs-4:last').after(itemHTML);

                    $('#item-list').show();
                    $('#form').hide();
                }, "json");
            } else {
                alert('적합한 URL이 아닙니다^^');
            }
        });
    })
}