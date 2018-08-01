$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    let employeeHTML = '';
    $.each(data.results, function(key, employee) {
        employeeHTML += '<div class="employee">';
        employeeHTML += '<img src=" '+ employee.picture.large + ' ">';
        employeeHTML += '<div class="info">';
        employeeHTML += '<p class="name"> '+ employee.name.first +' '+ employee.name.last +'</p>'
        employeeHTML += '<p class="email"> '+ employee.email +' </p>';
        employeeHTML += '<p class="city"> '+ employee.location.city +' </p></div></div>';
    });
    $('.wrapper').html(employeeHTML);
  } //end success
}); //end ajax
