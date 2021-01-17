$(window).ready(

    function () {
        $('#split').on('click', function () {
            $(".teasers").html("");
            var summarizer = new JsSummarize(
              {
                returnCount: 3
              });
            var summary = summarizer.summarize($('#title').val(),$('#input').val());
            summary.forEach(function(sentence)
            {
                $(".teasers").append("<li>"+sentence+"</li>");
            });
            $(".title").text($("#title").val());
        });

    });