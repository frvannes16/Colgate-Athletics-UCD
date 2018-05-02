/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

var slideInterval;

function pauseSlideshow() {
  clearInterval(slideInterval);
}

// Slider
function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide showing';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var next;
var previous;
// If there is a slider on the page, set it up to transition between pages.
if (slides.length > 0) {
  slideInterval = setInterval(nextSlide, 2000);
  next = document.getElementById('next');
  previous = document.getElementById('previous');
  next.onclick = function() {
    pauseSlideshow();
    nextSlide();
  };
  previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
  }
}

function toggleFavorite() {
  console.log("Toggling favorite");
  this.getElementsByClassName('fa-star')[0].classList.toggle('checked');
}

// Loop through all stars on the page and assign the onClick listener
var favoritable = document.getElementsByClassName('can-favorite');
for (var i = 0; i < favoritable.length; i++) {
  favoritable[i].addEventListener("click", toggleFavorite);
}

// Find all share buttons and add their click listener.
var pageTitleToShare = document.getElementsByClassName('section-title')[0];

function shareListener() {
  navigator.share("Check it out at http://www.gocolgateraiders.com", pageTitleToShare, "plain/text");
}

var shareBtn = document.querySelector('#share');
if (shareBtn != null) {
  shareBtn.addEventListener("click", shareListener);
}

// Gray out inactive links in the drawer menu. Any link with href="#" is greyed out.

var drawerLinks = document.querySelectorAll('.dropdown-container a');
const drawerLinksLen = drawerLinks.length;

for (var i = 0; i < drawerLinksLen; i++) {
  if (drawerLinks[i].getAttribute("href") == "#") {
    drawerLinks[i].classList.toggle('inactive');
  }
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("innerSidenav").style.width = "0";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("innerSidenav").style.width = "0";
}

function closeInnerNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("innerSidenav").style.width = "0";
}

function openInnerNav() {
  document.getElementById("innerSidenav").style.width = "250px";
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function roster_year_fnc() {
  document.getElementById("roster_year").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
