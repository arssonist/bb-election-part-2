$(document).ready(function() {
    // $('').click(function(){i
      $.ajax({
        url:'https://bb-election-api.herokuapp.com/',
        method:'GET',
        data: {},
        dataType:'json'
      }).done(function(responseData){
// create candidates list
        var candidates = responseData['candidates'];

        // console.log(candidates);
// create ul, not sure if here of in HTML
        var candidateContainer = $('<ul>');
        // loop through candidates
      for (var i = 0; i < candidates.length; i++){


        var button = $("<input type='button' value='newbutton' class='voteButton' data-candidate='" + candidates[i]['id'] + "'/>" );
  // create new li
        var newli = $('<li>');
  // change the parts of li to name and votes, use the i to change on each one
        newli.text(" " + candidates[i].name + " " + candidates[i].votes);

        button.appendTo(newli);

  // attached the new li to the entire container
        newli.appendTo(candidateContainer)

      // repalce old ul with new ul
      }

        $('#ul-id').html(candidateContainer);

        $(".voteButton").click(function(){
          // var candidateId = $(this).data('candidate')
          var candidateId = 5
          console.log(candidateId);
          $.ajax({
            url: 'https://bb-election-api.herokuapp.com/vote',
            method:"POST",
            data: {id: candidateId},
            dataType:'json'
          }).done(function(responseData){

          }).fail(function(data, status, error){
            console.log(status)
            if (status === "404") {
                // console.log("error");
            }

          })

        });  // });

      // candidates.forEach(function(i){
      //   console.log(candidates[i])
      // // });
      // $(function(){
      //   (button).appendTo(newli);
      //
      // })
// $(document).ready(function() {

});
});
