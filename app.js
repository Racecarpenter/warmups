$(document).ready(function() {
  var button = $('#button');
  var input = $('#name_input');
  var aList = $('#a_list');
  var alexList = $('#alex_list');
  var neitherList = $('#neither_list');

  button.on('click', function() {
    console.log("clicky");
    if (input.val().startsWith('alex' || 'Alex')) {
      alexList.append(input.val() + '\n');
    } else if (input.val().startsWith('a' || 'A')) {
      aList.append(input.val() + '\n');;
    } else {
      neitherList.append(input.val() + '\n');
    }
  });



})
