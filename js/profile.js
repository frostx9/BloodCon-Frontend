// Auth Check
$( document ).ready(function() {
  console.log('I am in the page');
  let type, url

  if(!localStorage.getItem('type')){
    window.location.href = 'index.html';
  }
  else {
    if(localStorage.getItem('type') === 'donor') {
      url = 'http://localhost:3050/donors/me'
      type = 'donor'
      $('#reqpost').css('display', 'none')
    }
    if(localStorage.getItem('type') === 'receiver') {
      url = 'http://localhost:3050/receivers/me'
      type = 'receiver'
    }
    $.ajax({
      url: url,
      // processData: false,
      contentType: 'application/json',
      // data: JSON.stringify(data),
      type: "GET",
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`)
      },
      success: function (response) {
        $('body').css('visibility', 'visible')
        dataInput(type, response)
        console.log(response);
      },
      error : function (error) {
        console.log(error);
      }
    })
  }


// Updating Profile

$('#mainForm').submit(function (e) {
  e.preventDefault()
  let name, age, weight, bloodGroup, address, area, city, state, country, phone, zipCode
  let data

  if (type === 'donor') {
    name = $('#name').val()
    age = $('#age').val()
    weight = $('#weight').val()
    bloodGroup = $('#blood').val()
    address = $('#address').val()
    area = $('#area').val()
    city = $('#city').val()
    state = $('#state').val()
    country = $('#country').val()
    phone = $('#number').val()
    zipCode = $('#zip').val()
    data = { name, age, weight, bloodGroup, address, area, city, state, country, phone, zipCode}
    $.ajax({
      url: 'http://localhost:3050/donors/me',
      processData: false,
      contentType: 'application/json',
      data: JSON.stringify(data),
      type: "PATCH",
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`)
      },
      success: function (response) {
        window.location.href = 'profile.html';
      },
      error : function (error) {
        console.log(error);
        alert('Wrong ID and password.')
      }
    })
  } else if (type === 'receiver') {
    name = $('#name').val()
    address = $('#address').val()
    area = $('#area').val()
    city = $('#city').val()
    state = $('#state').val()
    country = $('#country').val()
    phone = $('#number').val()
    zipCode = $('#zip').val()
    data = { name, address, area, city, state, country, phone, zipCode}
    $.ajax({
      url: 'http://localhost:3050/receivers/me',
      processData: false,
      contentType: 'application/json',
      data: JSON.stringify(data),
      type: "PATCH",
      beforeSend: function(request) {
        request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`)
      },
      success: function (response) {
        window.location.href = 'profile.html';
      },
      error : function (error) {
        console.log(error);
        alert('Wrong ID and password.')
      }
    })
  }
  console.log(data);
})
})

// Posting for blood
$('#postform').submit(function (e) {
  e.preventDefault()
  console.log('I am in the post');
  let desc, hospital, bloodGroup, address, area, city, state, country, phone, zipCode
  let data
  desc= $('#pdesc').val()
  hospital = $("#phospital").val()
  bloodGroup = $('#pblood').val()
  address = $('#paddress').val()
  area = $('#parea').val()
  city = $('#pcity').val()
  state = $('#pstate').val()
  country = $('#pcountry').val()
  phone = $('#pnumber').val()
  zipCode = $('#pzip').val()
  data = { desc, hospital, bloodGroup, address, area, city, state, country, phone, zipCode }
  console.log(data);
  $.ajax({
    url: 'http://localhost:3050/posts',
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    type: "POST",
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`)
    },
    success: function (response) {
      let a = 'Posted. Redirecting to Requests page.'
      $('.post').text(a)
      setTimeout(() => {
        window.location.href = 'requests.html';
      }, 3000);
    },
    error : function (error) {
      console.log(error);
      alert('Wrong ID and password.')
    }
  })
})






// ============================================
let dataInput = function (type2, response) {
  console.log('in function');
  if (type2 === 'donor') {
    $('#name').val(response.name)
    $('#age').val(response.age)
    $('#weight').val(response.weight)
    $('#blood').val(response.bloodGroup)
    $('#address').val(response.address)
    $('#area').val(response.area)
    $('#city').val(response.city)
    $('#state').val(response.state)
    $('#country').val(response.country)
    $('#number').val(response.phone)
    $('#zip').val(response.zipCode)
  } else if (type2 === 'receiver') {
    $('#name').val(response.name)
    $('.change').hide()
    $('#address').val(response.address)
    $('#area').val(response.area)
    $('#city').val(response.city)
    $('#state').val(response.state)
    $('#country').val(response.country)
    $('#number').val(response.phone)
    $('#zip').val(response.zipCode)
  }
}
