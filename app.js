$("#searchButton").on("click", function() {
  var searchTerm = $("#searchTerm").val()
  var startYear = $("#startYear").val()
  var endYear = $("#endYear").val()

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

  var parameterObj = {
    "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    q: searchTerm,
    begin_date: startYear + "0101",
    end_date: endYear + "0101"
  };

  $.ajax({
    url: queryURL + $.param(parameterObj),
    method: "GET"
  })

  .done(function(response){
    console.log(response)

    for (var i = 0; i < 10; i++) {

      var wellSection = $("<div>");

      var link = $("<a>"+response.response.docs[i].lead_paragraph+"</a>");

      link.attr("href", response.response.docs[i].web_url);

      $("#resultsDiv").append(wellSection.append(link));

    };

  });

});