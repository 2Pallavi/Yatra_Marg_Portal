//taxi services

const routes =[
  { no: "101", from: "Tapovan", to: "Gangapur Gaon", stops: [
    { name: "Tapovan Depot" },
    { name: "CH.Sambhaji Maharaj Naka" },
    { name: "Panchvati Depot Corner" },
    { name: "Old Adgaon Naka"},
      {name: "Nimani"},{name: "Panchvati Karanjya"},{name: "Ravivar Karanjya"}, 
      {name: "CBS"},{name: "New CBS/Civil Hospital"},{name: "Ved mandir"},
      {name: "Panchyat Samiti"},{name: "dudh Dairy"},{name: "Maharastra Police Academy(M.P.A)"},{name: "A.B.B Circle"},
      {name: "ITI Signal(Satpur)"},{name: "Ujwal Agency"},{name: "Satpur Police Station/Sakal office"},{name: "Satpur Manpa Vibhagiya Karyalaya"},
      {name: "ESI Hospital"},{name: "Satpur bus-stand"},{name: "Manpa Davakhana"},{name: "Shatrapati Shivaji Maharaj Vidyalaya"},
      {name: "Satpur Colony"},{name: "Samta Nagar"}, {name: "Anand Chhaya"}, {name: "Savakar nagar"},
      {name: "Rajya Karmachari Society"},{name: "Police Chowki(Ashok Nagar)"},{name: "Ashok Nagar"},
      {name: "New Mahindra gate"},{name: "Shramik Nagar"},{name: "Carbon Naka"},
      {name: "Chatrapati Shivaji Maharaj nagar"},{name: "Dhruv Nagar"},{name: "Motiwala College"}, {name: "Bardan Phata"},
      {name: "Balaji Mandir"},{name: "Gangapur Gaon"},
     
  ]
},


  { no: "245", from: "Nashik Road Depot", to: "Trimbakeshwar", stops: [
    { name: "Nashik Road railway station" },{name:"vibhagiya ayukt karyalaya"},{name:"Bytco"},{name:"GymKhana road"},{name:"Saint Filomina"},{name:"Press Gate"},{name:"Bhim Nagar/Central jail"},{name:"Jail taki"},{name:"Chatripati Shivaji Maharaj Nagar"},{name:"Shailani baba"},{name:"Dasak"},
    {name:"Laxmi Nagar"},{name:"Nandur gaon"},{name:"Nandur naka"},{name:"Nimse Bangala"},{name:"Nilgiri bag(Siddhi vinayak)"},{name:"Kailash Nagar"},{name:"Seva Society"},{name:"Kapaleshwar Nagar"},{name:"Tapovan"},{name:"CH.Sambhaji Maharaj Naka"},{name:"Panchavati Depot Corner"},{name:"Old adgaon naka"},{name:"Nimani"},{name:"Panchavati Karanja"},{name:"Raviwar Karanja"},{name:"Shalimar"},{name:"CBS"},{name:"New CBS/Civil hospital"},{name:"Ved mandir"},{name:"Panchyat Samiti"},{name:"Dudh Dairy"},{name:"Maharastra Police Academy(M.P.A)"},{name:"A.B.B Circle"},{name:"ITI Signal(Satpur)"},{name:"Ujwal Agency"},{name:"Satpur Police Station/Sakal office"},{name:"Satpur Manpa Vibhagiya Karyalaya"},{name:"ESI Hospital"},{name:"Satpur bus-stand"},{name:"Manpa Davakhana/maharastra housing colony"},{name:"Pappaya Nursery/Ambad Phata"},
    {name:"Jadhav Sankul Gate/Amrut gaurden"},{name:"Pimplagaon bahula"},{name:"Bharat Petrol pump trimbbak"},{name:"Trimbak Vidyamandir"},{name:"Wasali Phata"},{name:"Belgaon Dhaga Phata"},{name:"Sanskruti Hotel"},{name:"Sandip Foundation"},{name:"Mahiravani"},{name:"Talegaon Phata"},{name:"Khambale Phata"},{name:"Vadholi Phata"},{name:"Beze Phata"},{name:"Anjaneri Gaon Phata"},{name:"Anjaneri Tirth"},{name:"Brahm velly"},{name:"Tupadevi/Talwade Phata"},{name:"Tale/Pahine Phata"},{name:"Shree Swami Samarth Gurupeeth"},{name:"Dak Bunglow Trimbak"},{name:"Gajanan Maharaj Mandir"},{name:"Jawahar Phata"},{name:"M.V.P college"},{name:"Trimbakeshwar(police station)"}
  ]
  },

  { no: "245A", from: "Nashik Road Depot", to: "Trimbakeshwar(police station)", stops: [
    { name: "Nashik Road railway station" },{name:"vibhagiya ayukt karyalaya"},{name:"Bytco"},{name:"GymKhana road"},{name:"Saint Filomina"},{name:"Press Gate"},{name:"Bhim Nagar/Central jail"},{name:"Jail taki"},{name:"Chatripati Shivaji Maharaj Nagar"},{name:"Shailani baba"},{name:"Dasak"},
    {name:"Laxmi Nagar"},{name:"Nandur gaon"},{name:"Nandur naka"},{name:"Nimse Bangala"},{name:"Nilgiri bag(Siddhi vinayak)"},{name:"Kailash Nagar"},{name:"Seva Society"},{name:"Kapaleshwar Nagar"},{name:"Tapovan"},{name:"CH.Sambhaji Maharaj Naka"},{name:"Panchavati Depot Corner"},{name:"Old adgaon naka"},{name:"Nimani"},{name:"Panchavati Karanja"},{name:"Raviwar Karanja"},{name:"Shalimar"},{name:"CBS"},{name:"New CBS/Civil hospital"},{name:"Ved mandir"},{name:"Panchyat Samiti"},{name:"Dudh Dairy"},{name:"Maharastra Police Academy(M.P.A)"},{name:"A.B.B Circle"},{name:"ITI Signal(Satpur)"},{name:"Ujwal Agency"},{name:"Satpur Police Station/Sakal office"},{name:"Satpur Manpa Vibhagiya Karyalaya"},{name:"ESI Hospital"},{name:"Satpur bus-stand"},{name:"Manpa Davakhana/maharastra housing colony"},{name:"Pappaya Nursery/Ambad Phata"},
    {name:"Jadhav Sankul Gate/Amrut gaurden"},{name:"Pimplagaon bahula"},{name:"Bharat Petrol pump trimbbak"},{name:"Trimbak Vidyamandir"},{name:"Wasali Phata"},{name:"Belgaon Dhaga Phata"},{name:"Sanskruti Hotel"},{name:"Sandip Foundation"},{name:"Mahiravani"},{name:"Talegaon Phata"},{name:"Khambale Phata"},{name:"Vadholi Phata"},{name:"Beze Phata"},{name:"Anjaneri Gaon Phata"},{name:"Anjaneri Tirth"},{name:"Brahm velly"},{name:"Tupadevi/Talwade Phata"},{name:"Tale/Pahine Phata"},{name:"Shree Swami Samarth Gurupeeth"},{name:"Dak Bunglow Trimbak"},{name:"Gajanan Maharaj Mandir"},{name:"Jawahar Phata"},{name:"M.V.P college"},{name:"Trimbakeshwar(police station)"}
  ]
  },

  { no: "245B", from: "Nashik Road Depot", to: "Trimbakeshwar(police station)", stops: [
    { name: "Nashik Road railway station" },{name:"vibhagiya ayukt karyalaya"},{name:"Bytco"},{name:"GymKhana road"},{name:"Saint Filomina"},{name:"Press Gate"},{name:"Bhim Nagar/Central jail"},{name:"Jail taki"},{name:"Chatripati Shivaji Maharaj Nagar"},{name:"Shailani baba"},{name:"Dasak"},
    {name:"Laxmi Nagar"},{name:"Nandur gaon"},{name:"Nandur naka"},{name:"Nimse Bangala"},{name:"Nilgiri bag(Siddhi vinayak)"},{name:"Kailash Nagar"},{name:"Seva Society"},{name:"Kapaleshwar Nagar"},{name:"Tapovan"},{name:"CH.Sambhaji Maharaj Naka"},{name:"Panchavati Depot Corner"},{name:"Old adgaon naka"},{name:"Nimani"},{name:"Panchavati Karanja"},{name:"Raviwar Karanja"},{name:"Shalimar"},{name:"CBS"},{name:"New CBS/Civil hospital"},{name:"Ved mandir"},{name:"Panchyat Samiti"},{name:"Dudh Dairy"},{name:"Maharastra Police Academy(M.P.A)"},{name:"A.B.B Circle"},{name:"ITI Signal(Satpur)"},{name:"Ujwal Agency"},{name:"Satpur Police Station/Sakal office"},{name:"Satpur Manpa Vibhagiya Karyalaya"},{name:"ESI Hospital"},{name:"Satpur bus-stand"},{name:"Manpa Davakhana/maharastra housing colony"},{name:"Pappaya Nursery/Ambad Phata"},
    {name:"Jadhav Sankul Gate/Amrut gaurden"},{name:"Pimplagaon bahula"},{name:"Bharat Petrol pump trimbbak"},{name:"Trimbak Vidyamandir"},{name:"Wasali Phata"},{name:"Belgaon Dhaga Phata"},{name:"Sanskruti Hotel"},{name:"Sandip Foundation"},{name:"Mahiravani"},{name:"Talegaon Phata"},{name:"Khambale Phata"},{name:"Vadholi Phata"},{name:"Beze Phata"},{name:"Anjaneri Gaon Phata"},{name:"Anjaneri Tirth"},{name:"Brahm velly"},{name:"Tupadevi/Talwade Phata"},{name:"Tale/Pahine Phata"},{name:"Shree Swami Samarth Gurupeeth"},{name:"Dak Bunglow Trimbak"},{name:"Gajanan Maharaj Mandir"},{name:"Jawahar Phata"},{name:"M.V.P college"},{name:"Trimbakeshwar(police station)"}
  ]
  }
];



function searchRoute() {
  let value = document.getElementById("searchInput").value.trim().toLowerCase();
  let result = document.getElementById("result");
  result.innerHTML = "";

  if (value === "") return;

  let found = routes.filter(route => {

    // 1️⃣ Route number match
    if (route.no.toLowerCase().includes(value)) return true;

    // 2️⃣ From / To match
    if (route.from.toLowerCase().includes(value)) return true;
    if (route.to.toLowerCase().includes(value)) return true;

    // 3️⃣ Stop name match
    return route.stops.some(stop =>
      stop.name.toLowerCase().includes(value)
    );
  });

  if (found.length === 0) {
    result.innerHTML = "<p>No route found</p>";
    return;
  }

  found.forEach(r => {
    result.innerHTML += `
      <div class="route-card">
        <strong>Route ${r.no}</strong><br>
        ${r.from} → ${r.to}<br><br>

        <b>Stops:</b>
        <ul>
          ${r.stops.map(stop => `
            <li>
              ${stop.name}
             <!-- <span style="color:#555">(${stop.time})</span>  -->
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  });
}





//pdf
function openPDF(url) {
  if (!url) return;

  window.open(url, "_blank"); // PDF open in new tab
}


//taxi and cab  services
/*
function searchRoute() {
  let value = document.getElementById("searchInput").value.trim().toLowerCase();
  let result = document.getElementById("result");
  result.innerHTML = "";

  if (value === "") return;

  let found = routes.filter(route =>
    route.no.toLowerCase().includes(value) ||
    route.from.toLowerCase().includes(value) ||
    route.to.toLowerCase().includes(value) ||
    route.stops.some(stop =>
      stop.name.toLowerCase().includes(value)
    )
  );

  if (found.length === 0) {
    result.innerHTML = "<p>No route found</p>";
    return;
  }

  result.innerHTML += `<h3>🚌 "${value.toUpperCase()}" ला जाणाऱ्या Buses</h3>`;

  found.forEach(r => {
    result.innerHTML += `
      <div class="route-card">
        <strong>Route ${r.no}</strong><br>
        ${r.from} → ${r.to}

        <div class="stops-list">
          <ul>
            ${r.stops.map(stop => `
              <li class="${stop.name.toLowerCase().includes(value) ? 'highlight' : ''}">
                ${stop.name}
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `;
  });
}*/
function searchRoute() {
  let value = document.getElementById("searchInput").value.trim().toLowerCase();
  let result = document.getElementById("result");
  result.innerHTML = "";

  if (value === "") return;

  let found = routes.filter(route =>
    route.no.toLowerCase().includes(value) ||
    route.from.toLowerCase().includes(value) ||
    route.to.toLowerCase().includes(value) ||
    route.stops.some(stop => stop.name.toLowerCase().includes(value))
  );

  if (found.length === 0) {
    result.innerHTML = "<p>No route found</p>";
    return;
  }

  result.innerHTML = `
    <h3>🚌 "${value.toUpperCase()}" ला जाणाऱ्या ${found.length} Buses</h3> 

    <div class="route-wrapper">
      <button class="slide-btn left" onclick="slideLeft()">‹</button>

      <div class="route-slider" id="routeSlider">
        ${found.map(r => `
          <div class="route-card">
            <strong>Route ${r.no}</strong><br>
            ${r.from} → ${r.to}

            <div class="stops-list">
              <ul>
                ${r.stops.map(stop => `
                  <li class="${stop.name.toLowerCase().includes(value) ? 'highlight' : ''}">
                    ${stop.name}
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>

      <button class="slide-btn right" onclick="slideRight()">›</button>
    </div>
  `;
}

/*function slideLeft() {
  document.getElementById("routeSlider").scrollLeft -= 260;
}

function slideRight() {
  document.getElementById("routeSlider").scrollLeft += 260;
}*/
function slideLeft() {
  const slider = document.getElementById("routeSlider");
  const cardWidth = slider.children[0].offsetWidth + 16;
  slider.scrollLeft -= cardWidth;
}

function slideRight() {
  const slider = document.getElementById("routeSlider");
  const cardWidth = slider.children[0].offsetWidth + 16;
  slider.scrollLeft += cardWidth;
}





