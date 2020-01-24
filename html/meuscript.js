$(function (){
    var $persons = $('#persons');
    var $first = $('#first');
    var $last = $('#last');
    var $participation = $('#participation');
    $.ajax({
        type:'GET',
        url: 'http://localhost:3333/users',
        success: function(data) {
            
            $.each(data, function(i, item){
                i++;
                $persons.append('<tr><td>'+i+'<td>'+item.first+'</td><td>'+item.last+'</td><td>'+item.participation+' %</td></tr>')
                
            });
        },
        error: function(){
            alert('error loading persons');
        }
    });
    $('#add-person').on('click', function(){
        
        var obj = {
            first: $first.val(),
            last: $last.val(),
            participation: $participation.val()
        };
        $.ajax({
            
            type: 'POST',
            url: 'http://localhost:3333/users',
            data: obj,
            success: function(newPerson){
                $persons.append('<tr><td>'+i+'<td>'+newPerson.first+'</td><td>'+newPerson.last+'</td><td>'+newPerson.participation+' %</td></tr>')
            },
            error: function(){
                alert('error saving person');
            }
        });
    
    });

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        $.ajax({
            type: "GET",
            url: 'http://localhost:3333/users',
            dataType: "json"
            }).done(function (jsonData) {
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'first');
                data.addColumn('number', 'participation');
            
                jsonData.forEach(function (row) {
                    data.addRow([
                      row.first+' '+ row.last,
                      row.participation 
                      
                    ]);
              });
              var options = {
                
                pieHole: 0.4,
              };
              
              
              var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
              chart.draw(data, options);
            });
   
    }
   



});


