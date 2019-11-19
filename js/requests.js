$( document ).ready(function() {
  $.ajax({
    url: 'http://localhost:3050/postsAll',
    type: 'GET',
    success: function (response) {
      let data = response
      data.forEach(element => {
        $('#content').append(`<div class="card text-white container pt-4 bg-info mb-3" style="max-width: 18rem;"><div class="card-header text-left">Contact - ${element.phone} </div><div class="card-body"><h5 class="card-title">${element.bloodGroup} blood needed</h5><p class="card-text">${element.desc}</p><hr><p>Location - ${element.hospital}</p></div></div>`)
      });
    },
    error : function (error) {
      console.log(error);
    }
  })
})



// $('#content').html('<div class="card text-white bg-info mb-3" style="max-width: 18rem;"><div class="card-header text-left">Contact - 8961043633</div><div class="card-body"><h5 class="card-title">B- blood needed</h5><p class="card-text">lorem lorem lorem lorem lorem lorem</p><hr><p>Location - R.G.Kar Hospital</p></div></div>')

console.log(typeof(data));