
/*var name = "Laura Degeratu";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Member Relations Manager";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName, formattedRole);
//$("#header").append(formattedRole);*/

var bio = {
  "name": "Laura Degeratu",
  "role": "Member Relations Manager",
  "contacts": {
    "mobile" : "+40 722 449 168",
    "email" : "loveable_koneko@yahoo.com",
    "github": "konekote",
    "location": "Munich"
  },
  "biopic": "images/me.jpg",
  "welcome message" : "I am CAT",
  "skills" : ["loving cats", "petting", "eating pizza"]
};

var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedPic = HTMLbioPic.replace("%data%", bio["biopic"]);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio["welcome message"]);

$("#header").append(formattedMobile, formattedEmail, formattedPic, formattedWelcomeMsg);
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHeaderName);
/*var work = {};
work.position = "Member Relations Manager";
work.employer = "InterNations";
work.years = 0.5;

var education = {};
education["name"] = "Universitatea din Bucuresti";
education["years"] = "2009-2015";
education["city"] = "Bucharest";

$("#header").append(work["position"]);
$("#header").append(education.name); */

var education = {
  "schools": [
  {
      "name": "University of Bucharest",
      "location": "Bucharest, Romania",
      "degree": "MA",
      "majors": ["Japanese culture", "Japanese language"],
      "degree dates": "2012-2015"
    },
    {
      "name": "University of Bucharest",
      "location": "Bucharest, Romania",
      "degree": "BA",
      "majors": ["Japanese culture", "Japanese literature", "Japanese language"],
      "degree dates": "2009-2012"
    }
  ],
  "online courses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2017
    }
  ]
};

var work = {
  "jobs": [
  {
    "employer": "InterNations",
    "title": "Member Relations Manager",
    "location": "Munich",
    "dates": "2016-present",
    "description": "I am a gatekeeper for our members"
  },
  {
    "employer": "Lion Publishing",
    "title": "Customer Support Department Manager",
    "location": "Bucharest",
    "dates": "2015-2016",
    "description": "I helped people in Japanese with their Angry Birds games"
    },
    {
    "employer": "Conectys",
    "title": "Customer Support Agent",
    "location": "Bucharest",
    "dates": 2015,
    "description": "I helped as many customers as I could"
    }
  ]
};

var projects = [
    {
      "title": "Improving Customer Satisfaction",
      "dates": 2015,
      "description": ["adding feedback form", "revising templates", "improving SLAs"]
    },
    {
      "title": "Improving Refund Rates",
      "dates": 2016,
      "description": ["devising test templates", "having refund scenarios"]
    }
];

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
}

function displayWork () {
    // varianta I
    /*work.jobs.forEach(function(job){
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      var formattedWork = formattedEmployer + formattedTitle + formattedDates +
      formattedLocation + formattedDescription;

      $(".work-entry:last").append(formattedWork);
    });*/

    // varianta II
    for(var job=0;job<work.jobs.length;job++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      var formattedWork = formattedEmployer + formattedTitle + formattedDates +
      formattedLocation + formattedDescription;

      $(".work-entry:last").append(formattedWork);
    }
};

displayWork();

projects.display = function() {
  for(var project=0; project<projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
    var formattedProjects = formattedTitle + formattedDates + formattedDescription;

    $(".project-entry:last").append(formattedProjects);
  }
};

projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
