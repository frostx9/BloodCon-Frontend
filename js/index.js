$('.carousel').carousel({
  interval: 2000
})

$('#donor').click(function () {
  $('#fdonor').show()
  $('#freq').hide()
})

$('#receiver').click(function () {
  $('#freq').show()
  $('#fdonor').hide()
})

console.log("aaaaaa");


//Login Form

$('#formL').submit(function (e) {
  e.preventDefault()
  let email = $('#femail').val()
  let pass = $('#fpass').val()
  let type = $("input[name='gridRadios']:checked").val()
  console.log('submit');
  console.log(email, pass, type);

  if(type === 'donor'){
    url = 'http://localhost:3050/donors/login'
    get = 'donor'
  } else if(type === 'receiver') {
    get = 'receiver'
    url = 'http://localhost:3050/receivers/login'
  }
  let data = {
    email: email,
    password: pass
  }
  $.ajax({
    url: url,
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    type: "POST",
    success: function (response) {
      console.log(response[get]._id);
      localStorage.setItem('id', response[get]._id)
      localStorage.setItem('token', response.token)
      localStorage.setItem('type', get)
      window.location.href = 'profile.html';
    },
    error : function (error) {
      console.log(error);
      alert('Wrong ID and password')
    }
  })
})



// Navbar control

if (localStorage.getItem("id") === null) {
  console.log('no id');
  $('.list').append(`          <li class="nav-item login">
  <a class="nav-link" href="sign.html">Sign Up</a>
</li>
<li class="nav-item login">
  <a class="nav-link" data-toggle="modal" data-target="#modalLoginForm" href="#">Sign In</a>
</li>`)
} else {
  console.log('got id');
  $('.list').append(`
<li class="nav-item login">
  <a class="nav-link" href="profile.html">Profile</a>
</li>
<li class="nav-item logout2 login">
  <a class="nav-link" href="#">Log out</a>
</li>`)
}


// logging out
$('.logout2').click(function() {
  let lurl
  if(localStorage.getItem('type') === 'donor') {
    lurl = 'http://localhost:3050/donors/logout'
    type = 'donor'
  }
  if(localStorage.getItem('type') === 'receiver') {
    lurl = 'http://localhost:3050/receivers/logout'
    type = 'receiver'
  }
  $.ajax({
    url: lurl,
    type: 'POST',
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('token')}`)
    },
    success: function (response) {
      window.location.href = 'index.html'
      localStorage.clear()

    },
    error : function (error) {
      window.location.href = 'index.html'
      localStorage.clear()
    }
  })
})



















