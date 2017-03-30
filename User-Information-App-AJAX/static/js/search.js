// Part 2: 
    //Bandwidth optimization Modify your form again so that AJAX requests happen at most once every 300 milliseconds. 
    // Do this work in a git branch called "bandwidth-optimization".
    // Then, merge this branch into master with a pull request.

$(document).ready(function(){
    console.log("doc loaded")
    var $displaySearch = $('#autosearch')
    var currentTime2 = 0
    $displaySearch.keyup(function() {
        var currentInput = $displaySearch.val();
        currentTime1 = Date.now();

        if((currentTime1 - currentTime2) > 300){

            $.post("/displayAutoSearch", {gorilla : currentInput}, function (data, status) {
                console.log('status:')
                console.log(status)
                console.log(data)
            $('#list').empty();

                for (let i=0; i < data.length; i++) {
                    $("#list").append('<option>'+ data[i].firstname+'</option>');
                }
                currentTime2 = Date.now();
            });
        };
    });
});



    