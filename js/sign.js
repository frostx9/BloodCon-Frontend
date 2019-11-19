$('#donorform').submit(function (e) {
  console.log('fff');
  e.preventDefault()
  let name, email, password, age, weight, bloodGroup, address, area, city, state, country, phone, zipCode
  let data
  name = $('#dname').val()
  email = $('#demail').val()
  password = $('#dpassword').val()
  age = $('#dage').val()
  weight = $('#dweight').val()
  bloodGroup = $('#dblood').val()
  address = $('#daddress').val()
  area = $('#darea').val()
  city = $('#dcity').val()
  state = $('#dstate').val()
  country = $('#dcountry').val()
  phone = $('#dnumber').val()
  zipCode = $('#dzip').val()
  data = { name, email, password, age, weight, bloodGroup, address, area, city, state, country, phone, zipCode }
  console.log(data);
  $.ajax({
    url: 'http://localhost:3050/donors',
    processData: false,
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify(data),
    success: function (response) {
      localStorage.setItem('id', response.donor._id)
      localStorage.setItem('token', response.token)
      localStorage.setItem('type', 'donor')
      window.location.href = 'profile.html';
    },
    error : function (error) {
      console.log(error);
      alert('Wrong details.')
    }
  })
})

$('#receiverform').submit(function (e) {
  console.log('fff');
  e.preventDefault()
  let name, email, password, address, area, city, state, country, phone, zipCode
  let data_2
  name = $('#rname').val()
  email = $('#remail').val()
  password = $('#rpassword').val()
  address = $('#raddress').val()
  area = $('#rarea').val()
  city = $('#rcity').val()
  state = $('#rstate').val()
  country = $('#rcountry').val()
  phone = $('#rnumber').val()
  zipCode = $('#rzip').val()
  console.log('fff');
  data_2 = { name, email, password, address, area, city, state, country, phone, zipCode }
  console.log(data_2);
  $.ajax({
    url: 'http://localhost:3050/receivers',
    processData: false,
    contentType: 'application/json',
    type: 'POST',
    data: JSON.stringify(data_2),
    success: function (response) {
      localStorage.setItem('id', response.receiver._id)
      localStorage.setItem('token', response.token)
      localStorage.setItem('type', 'receiver')
      window.location.href = 'profile.html';
    },
    error : function (error) {
      console.log(error);
      alert('Wrong details.')
    }
  })
})