var d = 0;
var p = 0;
var itemStorage = [];
var grocery_cari0052 = "grocery_cari0052";
var index = 0;
var count = 0;
var clicked = 0;

var lineCounter = 0;
var checkBoxArray = [];

document.addEventListener('DOMContentLoaded', init);




function init() {
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "css/index.css");
    css.addEventListener("load", loadCount);

    document.querySelector("head").appendChild(css);


    var jq1 = document.createElement("script");
    jq1.addEventListener("load", loadCount);
    jq1.setAttribute("src", "jquery-1.11.3.min.js");
    document.querySelector("head").appendChild(jq1);


    var jq2 = document.createElement("script");
    jq2.addEventListener("load", loadCount);
    jq2.setAttribute("src", "jquery-migrate-1.2.1.min.js");
    document.querySelector("head").appendChild(jq2);


}


function loadCount() {

    d++;

    if (d == 3) {

        $("#delete").on("click", function() {

            $(".checkBox").each(function() {

                if ($(this).is(":checked")) {

                    checkBoxArray.push($(this).attr("id"));
                }
            });
            for (b = 0; b < checkBoxArray.length; b++) {
                $("#" + checkBoxArray[b]).parent().remove();
                index--;
            }

            SaveToStorage();

        });

        checkLocalStorage();

    }

}


function SaveToStorage() {

    localStorage.clear();
    itemStorage = [];


    item = {};
    item["description"] = $(this)[0].innerText;
    itemStorage.push(item);

});


$("input[type='checkbox']").each(function() {
    item = {};
    console.log("number of checkbox" + $(this));
    item["checked"] = $(this)[0].checked;

});

localStorage.setItem(grocery_cari0052, JSON.stringify(itemStorage));
checkLocalStorage();

}

function checkLocalStorage() {

    $('#clear').on('click', clearAll);

    var check = localStorage.getItem(grocery_cari0052);
    if (check || check === "") {
        itemStorage = JSON.parse(check);
        display();
        $('#txt').css('display', 'block');
    } else {
        $("#add").on("click", function() {
            $('#txt').css("display", "block");
        });
    }
    grabFood();
}

function clearAll() {
    localStorage.clear();
    $('#txt').css('display', 'none');
    $('li').remove();
    index = 0;
    $("#add").on("click", function() {
        $('#txt').css("display", "block");

    });
}


function grabFood() {

    $("#txt").on("keypress", function(key) {
        if (key.which == 13) {
            var text = $('#txt').val();

            item = {};
            if (text != '') {
                item["description"] = text;
                item["checked"] = '';

                itemStorage.push(item);

                localStorage.setItem(grocery_cari0052, JSON.stringify(itemStorage));
                $('#txt').val('');
            }
            display();
        }
    });
}


function display() {

    for (p = index; p < itemStorage.length; p++) {
        $('.content').append('<li>' + '<input type="checkbox" class="checkBox" name="food" id="' + lineCounter + '" ' + itemStorage[p].checked + '>' + itemStorage[p].description + '</li>');
        index++;
        console.log("my index" + index);
        console.log("my i counter" + p);
        lineCounter++;
        $(".content").css("list-style-type", "none");

    }

    checkBox();

}

function checkBox() {


    $(".checkBox").on("change", function() {

        if ($(this)[0].checked == true) {

            var location = $(this)[0].id;
            itemStorage[location].checked = 'checked';


            localStorage.setItem(grocery_cari0052, JSON.stringify(itemStorage));
        } else {
            var location = $(this)[0].id;
            itemStorage[location].checked = '';
            localStorage.setItem(grocery_cari0052, JSON.stringify(itemStorage));
        }
    });

}