var z = 0;
var i= 0;
var itemStorage = [];
var grocery_anto0084 = "grocery_anto0084";
var index = 0;
var count = 0;
var clicked = 0;
//var newArray = [];
var lineCounter = 0;
var checkBoxArray = [];

document.addEventListener('DOMContentLoaded', init);




function init() {
    var css = document.createElement("link");    
    css.setAttribute("rel", "stylesheet");    
    css.setAttribute("href", "css/index.css");    
    css.addEventListener("load", loadCount); //css page is loaded?
        
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

    z++;

    if (z == 3) {
        
        
//        Event Listener For Delete Button
        
        
        $("#delete").on("click", function() {
            
           $(".checkBox").each(function() {
            
            if($(this).is(":checked")) {
                
                checkBoxArray.push($(this).attr("id"));
            }    
           });
                for(b=0; b<checkBoxArray.length; b++){
                    $("#" + checkBoxArray[b]).parent().remove();        
            }

            
         
//        itemStorage.splice(location,1);
//        localStorage.setItem(grocery_anto0084, JSON.stringify(itemStorage));

        
//        deleteFoodLocalStorage();
                            SaveToStorage();


});


                        checkLocalStorage();

    }

}



function SaveToStorage() {
    
    localStorage.clear();
    itemStorage = [];
    
//    alert("1");
    $("li").each(function() {
//                alert("2");
//        console.log("number of li" + $(this));
//
        
        item = {};
        item["description"] = $(this)[0].innerText;
        itemStorage.push(item);
        

//        item["checked"] = '';
        
//       itemStorage["description"].push($(this)[0].innerText);
        
        
//        itemStorage["description"].push($(this)[0].description);
//        alert("3");
//    });
    

        
});
    

    
    $("input[type='checkbox']").each(function() {
//     console.log($(this)); 
                item = {};
        console.log("number of checkbox" + $(this));
        item["checked"] = $(this)[0].checked;
        
    });
    
            localStorage.setItem(grocery_anto0084, JSON.stringify(itemStorage));

}

function checkLocalStorage() {

    $('#clear').on('click', clearAll);

    var check = localStorage.getItem(grocery_anto0084);
    if (check || check === "") {
        itemStorage = JSON.parse(check);
        display();
        $('#txt').css('display', 'block');
    } else {
        $("#add").on("click", function () {
            $('#txt').css("display", "block");
        });
    }
    grabFood();
}

function clearAll () {
        localStorage.clear();
        $('#txt').css('display', 'none');
        $('li').remove();
        $("#add").on("click", function () {
            $('#txt').css("display", "block");

        });
}


function grabFood() {
    
    $("#txt").on("keypress", function (key) {
        if (key.which == 13) {
            var text = $('#txt').val();

            item = {};
            if (text != '') {
                item["description"] = text;
                item["checked"] = '';

                itemStorage.push(item);

                localStorage.setItem(grocery_anto0084, JSON.stringify(itemStorage));
                $('#txt').val('');
            }
            display();
        }
    });
}


function display() {

    for (i = index; i < itemStorage.length; i++) {
        $('.content').append('<li>' + '<input type="checkbox" class="checkBox" name="food" id="'+ lineCounter+'" ' +itemStorage[i].checked +'>' + itemStorage[i].description + '</li>');
        index++;
        lineCounter++;
                $(".content").css("list-style-type", "none");

//        console.log(index);
    }
    
//    count++;
    
    checkBox();
    


//        var test = $(this).id;
        // console.log($(this));
//        if ($(".checkBox").checked == true) {
//            $(this).prop("checked", true);
//            //consle.log($this.id);
//        } 
    }
    
function checkBox() {
    
  
     $(".checkBox").on("change" , function() {
         
         if($(this)[0].checked == true) {
//             console.log($(this)[0].id);
     
             var location = $(this)[0].id;
             itemStorage[location].checked = 'checked';
//               
//           
//             item = {};
             
//            itemStorage.push(item);
             localStorage.setItem(grocery_anto0084, JSON.stringify(itemStorage));
         } else { 
             var location = $(this)[0].id;
             itemStorage[location].checked = '';
            localStorage.setItem(grocery_anto0084, JSON.stringify(itemStorage));
         }
    
//         deleteFoodLocalStorage(location);
});
//        deleteFoodPage(location);

}

//    $(".checkBox").on("change", deleteFood(););


//function deleteFoodPage(location) {
//
////    console.log(location);
//
//}

//function deleteFoodLocalStorage(location) {
//    
//    alert("!");
//    
//    
//    
//    
//    
////var x = JSON.parse(localStorage[grocery_anto0084]);
////    
////    for (y=0; y<x.length; y++) {
////        console.log(x[y].description);
////        
////        if(x[y].description == clicked) {
////         x.remove(x[y]); 
////            console.log(x)
////        }
////    }
//}