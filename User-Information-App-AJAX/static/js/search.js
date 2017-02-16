
// const displaySearch = document.getElementById("autosearch")


$(document).ready(function(){
    console.log("doc loaded")
    var $displaySearch = $('#autosearch')
    $displaySearch.keyup(function() {
        var currentInput = $displaySearch.val();
        $.post("/displayAutoSearch", {gorilla : currentInput}, function (data, status) {
            console.log(status)
            console.log(data)
           $('#list').empty()

            for (let i=0; i < data.length; i++) {
                $("#list").append('<option>'+ data[i].firstname+'</option>');
            }
            

        // if(e.keyCode == 32 || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 48 && e.keyCode <= 57)){
        // latestQuery = currentQuery + String.fromCharCode(e.keyCode);
        // displaySearch.val(latestQuery);
        // updateResults(latestQuery);
        // }
            
        });
    });
});



    