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


let data = [
  {
    _id: "5d8f4efd4c5e2b3a145844ca",
    desc: "Need urgent B- blood for a cancer patient",
    bloodGroup: "B-",
    hospital: "R.G.Kar Hospital",
    area: "Shyambazar",
    address: "25, Chowdhury Nibash, Nimta",
    city: "kolkata",
    state: "East Bengal",
    zipCode: 700049,
    country: "India",
    phone: "8961043633",
    owner: "5d8f4ee84c5e2b3a145844c7",
    createdAt: "2019-09-28T12:15:57.866Z",
    updatedAt: "2019-09-28T12:15:57.866Z",
    __v: 0
  },
  {
    _id: "5d8f4f344c5e2b3a145844cb",
    desc: "Need A+ blood for a 10 year old child",
    bloodGroup: "A+",
    hospital: "Sagar Dutta Hospital",
    area: "kamarhati",
    address: "25, Chowdhury Nibash, Nimta",
    city: "kolkata",
    state: "East Bengal",
    zipCode: 700049,
    country: "India",
    phone: "8961043633",
    owner: "5d8f4ee84c5e2b3a145844c7",
    createdAt: "2019-09-28T12:16:52.862Z",
    updatedAt: "2019-09-28T12:16:52.862Z",
    __v: 0
  },
  {
    _id: "5d8f4f504c5e2b3a145844cd",
    desc: "Pregnant lady needs 2 bag of O- blood within 24 hours.",
    bloodGroup: "O-",
    hospital: "Narayana Hospital",
    area: "Maddhyamgram",
    address: "25, Chowdhury Nibash, Nimta",
    city: "kolkata",
    state: "East Bengal",
    zipCode: 700049,
    country: "US",
    phone: "8961043633",
    owner: "5d8f24859f58c207c81a0623",
    createdAt: "2019-09-28T12:17:20.821Z",
    updatedAt: "2019-09-28T12:17:20.821Z",
    __v: 0
  },
  {
    _id: "5d8f4f5a4c5e2b3a145844ce",
    desc: "Need AB+ for a patient suffering from 3rd degree burn.",
    bloodGroup: "AB+",
    area: "Shyambazar",
    hospital: "R.G.Kar",
    address: "25, Chowdhury Nibash, Nimta",
    city: "delhi",
    state: "East Bengal",
    zipCode: 700049,
    country: "US",
    phone: "8961043633",
    owner: "5d8f24859f58c207c81a0623",
    createdAt: "2019-09-28T12:17:30.252Z",
    updatedAt: "2019-09-28T12:17:30.252Z",
    __v: 0
  },
  {
    _id: "5d8f4f624c5e2b3a145844cf",
    desc: "Need AB- blood for a person wounded in accident.",
    bloodGroup: "AB-",
    hospital: "R.G.Kar",
    address: "25, Chowdhury Nibash, Nimta",
    city: "delhi",
    state: "East Bengal",
    zipCode: 700049,
    country: "India",
    phone: "8961043633",
    owner: "5d8f24859f58c207c81a0623",
    createdAt: "2019-09-28T12:17:38.041Z",
    updatedAt: "2019-09-28T12:17:38.041Z",
    __v: 0
  },{
    _id: "5d8f4efd4c5e2b3a145844ca",
    desc: "Need urgent B- blood for a cancer patient",
    bloodGroup: "B-",
    hospital: "R.G.Kar Hospital",
    area: "Shyambazar",
    address: "25, Chowdhury Nibash, Nimta",
    city: "kolkata",
    state: "East Bengal",
    zipCode: 700049,
    country: "India",
    phone: "8961043633",
    owner: "5d8f4ee84c5e2b3a145844c7",
    createdAt: "2019-09-28T12:15:57.866Z",
    updatedAt: "2019-09-28T12:15:57.866Z",
    __v: 0
  },
  {
    _id: "5d8f4f344c5e2b3a145844cb",
    desc: "Need A+ blood for a 10 year old child",
    bloodGroup: "A+",
    hospital: "Sagar Dutta Hospital",
    area: "kamarhati",
    address: "25, Chowdhury Nibash, Nimta",
    city: "kolkata",
    state: "East Bengal",
    zipCode: 700049,
    country: "India",
    phone: "8961043633",
    owner: "5d8f4ee84c5e2b3a145844c7",
    createdAt: "2019-09-28T12:16:52.862Z",
    updatedAt: "2019-09-28T12:16:52.862Z",
    __v: 0
  },
  {
    _id: "5d8f4f504c5e2b3a145844cd",
    desc: "Pregnant lady needs 2 bag of O- blood within 24 hours.",
    bloodGroup: "O-",
    hospital: "Narayana Hospital",
    area: "Maddhyamgram",
    address: "25, Chowdhury Nibash, Nimta",
    city: "kolkata",
    state: "East Bengal",
    zipCode: 700049,
    country: "US",
    phone: "8961043633",
    owner: "5d8f24859f58c207c81a0623",
    createdAt: "2019-09-28T12:17:20.821Z",
    updatedAt: "2019-09-28T12:17:20.821Z",
    __v: 0
  },
  {
    _id: "5d8f4f5a4c5e2b3a145844ce",
    desc: "Need AB+ for a patient suffering from 3rd degree burn.",
    bloodGroup: "AB+",
    area: "Shyambazar",
    hospital: "R.G.Kar",
    address: "25, Chowdhury Nibash, Nimta",
    city: "delhi",
    state: "East Bengal",
    zipCode: 700049,
    country: "US",
    phone: "8961043633",
    owner: "5d8f24859f58c207c81a0623",
    createdAt: "2019-09-28T12:17:30.252Z",
    updatedAt: "2019-09-28T12:17:30.252Z",
    __v: 0
  },
  {
    _id: "5d8f4f624c5e2b3a145844cf",
    desc: "Need AB- blood for a person wounded in accident.",
    bloodGroup: "AB-",
    hospital: "R.G.Kar",
    address: "25, Chowdhury Nibash, Nimta",
    city: "delhi",
    state: "East Bengal",
    zipCode: 700049,
    country: "India",
    phone: "8961043633",
    owner: "5d8f24859f58c207c81a0623",
    createdAt: "2019-09-28T12:17:38.041Z",
    updatedAt: "2019-09-28T12:17:38.041Z",
    __v: 0
  }
]


data.forEach(element => {
  $('#content').append(`<div class="card text-white container pt-4 bg-info mb-3" style="max-width: 18rem;"><div class="card-header text-left">Contact - ${element.phone} </div><div class="card-body"><h5 class="card-title">${element.bloodGroup} blood needed</h5><p class="card-text">${element.desc}</p><hr><p>Location - ${element.hospital}</p></div></div>`)
});

// $('#content').html('<div class="card text-white bg-info mb-3" style="max-width: 18rem;"><div class="card-header text-left">Contact - 8961043633</div><div class="card-body"><h5 class="card-title">B- blood needed</h5><p class="card-text">lorem lorem lorem lorem lorem lorem</p><hr><p>Location - R.G.Kar Hospital</p></div></div>')

console.log(typeof(data));