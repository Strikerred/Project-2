/* global $ */

const schedule = [
  ['Sep 9', 'Orientation', 'Phil / Alex / Marlene', 481],
  ['Sep 10', 'Orientation - Day 2', 'Phil / Marlene', 382],
  ['Sep 11', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Sep 12', 'System Analysis & Design', 'Phil Weier', 382],
  ['Sep 13', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Sep 16', 'Javascript', 'Jason Harrison', 382],
  ['Sep 17', 'System Analysis & Design', 'Phil Weier', 382],
  ['Sep 18', 'Relational Databases', 'Phil Weier', 382],
  ['Sep 19', 'System Analysis & Design', 'Phil Weier', 382],
  ['Sep 20', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Sep 23', 'Javascript', 'Jason Harrison', 382],
  ['Sep 24', 'Relational Databases', 'Phil Weier', 382],
  ['Sep 25', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Sep 26', 'System Analysis & Design', 'Phil Weier', 382],
  ['Sep 27', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Sep 30', 'Javascript', 'Jason Harrison', 382],
  ['Oct 1', 'Relational Databases', 'Phil Weier', 382],
  ['Oct 2', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 3', 'System Analysis & Design', 'Phil Weier', 382],
  ['Oct 4', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 7', 'Relational Databases', 'Phil Weier', 382],
  ['Oct 8', 'Relational Databases', 'Phil Weier', 382],
  ['Oct 9', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 10', 'Relational Databases', 'Phil Weier', 382],
  ['Oct 11', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 14', 'Thanksgiving Day'],
  ['Oct 15', 'Flex Day'],
  ['Oct 16', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 17', 'C# - OOP', 'Phil Weier', 382],
  ['Oct 18', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 21', 'Javascript', 'Jason Harrison', 382],
  ['Oct 22', 'PHP', 'Jeff Parker', 382],
  ['Oct 23', 'HTML5/CSS3', 'Michael Whyte', 382],
  ['Oct 24', 'Javascript', 'Jason Harrison', 382],
  ['Oct 25', 'Frontend Project', 'Michael Whyte', 382],
  ['Oct 28', 'Javascript', 'Jason Harrison', 382],
  ['Oct 29', 'PHP', 'Jeff Parker', 382],
  ['Oct 30', 'Frontend Project', 'Michael Whyte', 382],
  ['Oct 31', 'Presentation Skills', 'Marlene Delanghe', 382],
  ['Nov 1', 'Frontend Project', 'Michael Whyte', 382],
  ['Nov 4', 'C# - OOP', 'Phil Weier', 382],
  ['Nov 5', 'PHP', 'Jeff Parker', 382],
  ['Nov 6', 'C# - OOP', 'Phil Weier', 382],
  ['Nov 7', 'Angular', 'Alex Cooper', 382],
  ['Nov 8', 'Frontend Project', 'Michael Whyte', 382],
  ['Nov 11', 'Remembrance Day'],
  ['Nov 12', 'Laravel', 'Jason Harrison', 382],
  ['Nov 13', 'Angular', 'Alex Cooper', 382],
  ['Nov 14', 'PHP', 'Jeff Parker', 382],
  ['Nov 15', 'C# - OOP', 'Phil Weier', 382],
  ['Nov 18', 'Angular', 'Alex Cooper', 382],
  ['Nov 19', 'Laravel', 'Jason Harrison', 382],
  ['Nov 20', 'C# - OOP', 'Phil Weier', 382],
  ['Nov 21', 'Angular', 'Alex Cooper', 382],
  ['Nov 22', 'C# - OOP', 'Phil Weier', 382],
  ['Nov 25', '.NET Core - MVC', 'Phil Weier', 382],
  ['Nov 26', 'Laravel', 'Jason Harrison', 382],
  ['Nov 27', '.NET Core - MVC', 'Phil Weier', 382],
  ['Nov 28', 'React', 'Alex Cooper', 382],
  ['Nov 29', 'React', 'Alex Cooper', 382],
  ['Dec 2', 'React', 'Alex Cooper', 382],
  ['Dec 3', 'Laravel', 'Jason Harrison', 382],
  ['Dec 4', '.NET Core - MVC', 'Phil Weier', 382],
  ['Dec 5', 'React', 'Alex Cooper', 382],
  ['Dec 6', '.NET Core - MVC', 'Phil Weier', 382],
  ['Dec 9', 'Resume Writing Essentials', 'Marlene Delanghe', 382],
  ['Dec 10', 'Laravel', 'Jason Harrison', 382],
  ['Dec 11', '.NET Core - MVC', 'Phil Weier', 382],
  ['Dec 12', 'AWS', 'Alex Cooper', 382],
  ['Dec 13', 'Portfolio Site Presentation', 'Phil Weier'],
  ['Dec 16', 'Winter Break'],
  ['Dec 17', 'Winter Break'],
  ['Dec 18', 'Winter Break'],
  ['Dec 19', 'Winter Break'],
  ['Dec 20', 'Winter Break'],
  ['Dec 23', 'Winter Break'],
  ['Dec 24', 'Winter Break'],
  ['Dec 25', 'Winter Break'],
  ['Dec 26', 'Winter Break'],
  ['Dec 27', 'Winter Break'],
  ['Dec 30', 'Winter Break'],
  ['Dec 31', 'Winter Break'],
  ['Jan 1', 'Winter Break'],
  ['Jan 2', 'Winter Break'],
  ['Jan 3', 'Winter Break'],
  ['Jan 6', 'AWS', 'Alex Cooper', 360],
  ['Jan 7', 'Laravel', 'Jason Harrison', 360],
  ['Jan 8', '.NET Core Web API', 'Phil Weier', 360],
  ['Jan 9', '.NET Core - MVC', 'Phil Weier', 360],
  ['Jan 10', 'Web Application Security', 'Pat McGee', 360],
  ['Jan 13', '.NET Core - MVC', 'Phil Weier', 360],
  ['Jan 14', 'AWS', 'Alex Cooper', 360],
  ['Jan 15', '.NET Core Web API', 'Phil Weier', 360],
  ['Jan 16', 'AWS', 'Alex Cooper', 360],
  ['Jan 17', 'Web Application Security', 'Pat McGee', 360],
  ['Jan 20', 'AWS', 'Alex Cooper', 360],
  ['Jan 21', '.NET Core - MVC', 'Phil Weier', 360],
  ['Jan 22', '.NET Core Web API', 'Phil Weier', 360],
  ['Jan 23', 'AWS', 'Alex Cooper', 360],
  ['Jan 24', 'Web Application Security', 'Pat McGee', 360],
  ['Jan 27', 'iOS', 'Phil Weier', 360],
  ['Jan 28', '.NET Core Web API', 'Phil Weier', 360],
  ['Jan 29', '.NET Core Web API', 'Phil Weier', 360],
  ['Jan 30', 'X-Platform Mobile', 'Alex Cooper', 360],
  ['Jan 31', 'Web Application Security', 'Pat McGee', 360],
  ['Feb 3', 'iOS', 'Phil Weier', 360],
  ['Feb 4', 'Android', 'Phil Weier', 360],
  ['Feb 5', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Feb 6', 'X-Platform Mobile', 'Alex Cooper', 360],
  ['Feb 7', 'Web Application Security', 'Pat McGee', 360],
  ['Feb 10', 'iOS', 'Phil Weier', 360],
  ['Feb 11', 'Android', 'Phil Weier', 360],
  ['Feb 12', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Feb 13', 'Flex Day'],
  ['Feb 14', 'X-Platform Mobile', 'Alex Cooper', 360],
  ['Feb 17', 'Family Day'],
  ['Feb 18', 'Flex Day'],
  ['Feb 19', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Feb 20', 'Android', 'Phil Weier', 360],
  ['Feb 21', 'Passion Project', 'Phil Weier', 360],
  ['Feb 24', 'iOS', 'Phil Weier', 360],
  ['Feb 25', 'X-Platform Mobile', 'Alex Cooper', 360],
  ['Feb 26', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Feb 27', 'Android', 'Phil Weier', 360],
  ['Feb 28', 'Passion Project', 'Phil Weier', 360],
  ['Mar 2', 'iOS', 'Phil Weier', 360],
  ['Mar 3', 'X-Platform Mobile', 'Alex Cooper', 360],
  ['Mar 4', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Mar 5', 'Android', 'Phil Weier', 360],
  ['Mar 6', 'Passion Project', 'Phil Weier', 360],
  ['Mar 9', 'iOS', 'Phil Weier', 360],
  ['Mar 10', 'Android', 'Phil Weier', 360],
  ['Mar 11', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Mar 12', 'Flex Day'],
  ['Mar 13', 'Mobile Project', 'Alex Cooper', 360],
  ['Mar 16', 'Spring Break'],
  ['Mar 17', 'Spring Break'],
  ['Mar 18', 'Spring Break'],
  ['Mar 19', 'Spring Break'],
  ['Mar 20', 'Spring Break'],
  ['Mar 23', 'Flex Day'],
  ['Mar 24', 'Passion Project (optional Demos)', 'Phil Weier', 360],
  ['Mar 25', 'Full-Stack JS', 'Medhat Elmasry', 360],
  ['Mar 26', 'Mobile Project', 'Alex Cooper', 360],
  ['Mar 27', 'Mobile Project', 'Alex Cooper', 360],
  ['Mar 30', 'Mobile Project (optional Demos)', 'Alex Cooper', 360],
  ['Mar 31', 'Final Project', 'Phil Weier', 360],
  ['Apr 1', 'Final Project', 'Phil Weier', 360],
  ['Apr 2', 'Interview Skills', 'Marlene Delanghe', 360],
  ['Apr 3', 'Final Project', 'Phil Weier', 360],
  ['Apr 6', 'Final Project', 'Phil Weier', 360],
  ['Apr 7', 'Final Project', 'Phil Weier', 360],
  ['Apr 8', 'Final Project (with Demos)', 'Phil Weier'],
  ['Apr 9', 'Mock Interviews', 'Phil/Marlene'],
  ['Apr 10', 'Good Friday'],
  ['Apr 13', 'Easter Monday'],
  ['Apr 1-May 7', 'Industry Projects', 'Phil Weier'],
  ['May 8', 'Demo Day', 'Phil Weier']
]

let w = 0
let i
for (i in schedule) {
  const d = parseInt(i) % 5
  if (d === 0) {
    w++
    var week = document.getElementById('week' + w)
  }

  if (schedule[i][0]) {
    const p1 = document.createElement('p')
    const txt1 = document.createTextNode(schedule[i][0])
    p1.appendChild(txt1)
    week.appendChild(p1)
  }
  if (schedule[i][1]) {
    const p2 = document.createElement('p')
    const txt2 = document.createTextNode(schedule[i][1])
    p2.appendChild(txt2)
    week.appendChild(p2)
  }
  if (schedule[i][2]) {
    const p3 = document.createElement('p')
    const txt3 = document.createTextNode(schedule[i][2])
    p3.appendChild(txt3)
    week.appendChild(p3)
  }
  if (d !== 4) {
    week.appendChild(document.createElement('hr'))
  }
}

$('.collapse').on('show.bs.collapse', function (e) {
  var $btn = $(this)
  const $btns = $('.month')

  console.log($btns)

  console.log($btns.findIndex($btn))

  // $('body')[0].scrollTop = $('body')[0].scrollHeight

  $('html, body').animate({
    scrollTop: document.body.scrollHeight
  }, 500, function () {
    console.log('finished...')
    console.log($(this)[0].scrollHeight)
  })
/*
  $(window).animate({
    scrollTop: document.body.scrollHeight
  }, 500) */
})
