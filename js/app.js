//AJAX Request
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    //Employee cards HTML
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

    //Modal HTML
    $('.employee').on('click', function(){
      let employeeHTML = '';
      let currentIndex = $(this).index();
      let modalPic = data.results[currentIndex].picture.large;
      let modalFirstName = data.results[currentIndex].name.first;
      let modalLastName = data.results[currentIndex].name.last;
      let modalEmail = data.results[currentIndex].email;
      let modalCity = data.results[currentIndex].location.city;
      let modalPhone = data.results[currentIndex].cell;
      let modalStreet = data.results[currentIndex].location.street;
      let modalState = data.results[currentIndex].location.state;
      let modalPostCode = data.results[currentIndex].location.postcode;
      let modalBirthday = data.results[currentIndex].dob.date.substr(0, 10); //only return part of the string

      employeeHTML += '<div class="modal-content">';
      employeeHTML += '<span class="close">&times;</span>';
      employeeHTML += '<img src=" '+ modalPic + ' ">';
      employeeHTML += '<p class="name"> '+ modalFirstName +' '+ modalLastName +'</p>'
      employeeHTML += '<p class="email"> '+ modalEmail +' </p>';
      employeeHTML += '<p class="city"> '+ modalCity +' </p>';
      employeeHTML += '<hr>';
      employeeHTML += '<p class="phone"> '+ modalPhone +' </p>';
      employeeHTML += '<p class="address"> '+ modalStreet +''+','+' '+ modalCity +''+','+' '+ modalState +' '+ modalPostCode +'</p>';
      employeeHTML += '<p class="birthday"> '+' Birthday: '+' '+ modalBirthday +' </p></div></div>';
      $('.modal').html(employeeHTML);

      //Open modal
      $('.modal').fadeIn();
      //Close modal
      $('.close').on('click', function(){
        $('.modal').fadeOut();
      });
    });

    //Search filter input
    $('#filter').on('keyup', function(){
      let inputVal = $(this).val().toLowerCase();

      $('.employee').filter(function(){
        $(this).toggle($(this).text().indexOf(inputVal) > -1);
      });
    });

  } //End success
}); //End AJAX
