var bio = {
    "name": "Laura Degeratu",
    "role": "Member Relations Manager",
    "contacts": {
        "mobile": "+40 722 449 168",
        "email": "loveable_koneko@yahoo.com",
        "github": "konekote",
        "location": "Munich"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "I am CAT",
    "skills": ["loving cats", "petting", "eating pizza"],
    "display": function() {
        var formattedHeaderName = HTMLheaderName.replace("%data%", this.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").append(formattedPic, formattedWelcomeMsg);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#header").prepend(formattedHeaderName, formattedHeaderRole);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            this.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });
        }
    },
};



var education = {
    "schools": [{
            "name": "University of Bucharest",
            "location": "Bucharest, Romania",
            "degree": "MA",
            "majors": ["Japanese culture", "Japanese language"],
            "dates": "2012-2015"
        },
        {
            "name": "University of Bucharest",
            "location": "Bucharest, Romania",
            "degree": "BA",
            "majors": ["Japanese culture", "Japanese literature", "Japanese language"],
            "dates": "2009-2012"
        },
    ],
    "onlineCourses": [{
        "title": "JavaScript Syntax",
        "school": "Udacity",
        "dates": 2017,
        "url": "https://www.udacity.com/nanodegree"
    }, ],
    "display": function() {
        for (var school = 0; school < this.schools.length; school++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
            var formattedSchools = formattedName + formattedDegree + formattedDates +
                formattedLocation + formattedMajor;

            $(".education-entry:last").append(formattedSchools);
        }

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course = 0; course < this.onlineCourses.length; course++) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedDate = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
            var formattedSchoolName = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
            var formattedOnline = formattedTitle + formattedSchoolName + formattedDate + formattedURL;

            $(".education-entry:last").append(formattedOnline);
        }
    },
};


var work = {
    "jobs": [{
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
        },
    ],
    "display": function() {
        for (var job = 0; job < this.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
            var formattedWork = formattedEmployer + formattedTitle + formattedDates +
                formattedLocation + formattedDescription;

            $(".work-entry:last").append(formattedWork);
        }
    },
};

function appendImage(image) {
    var formattedPic = HTMLprojectImage.replace("%data%", image);
    $(".project-entry:last").append(formattedPic);
}

var projects = {
    "projects": [{
            "title": "Improving Customer Satisfaction",
            "dates": 2015,
            "description": "adding feedback form, revising templates, improving SLAs",
            "images": ["http://placekitten.com/g/200/200", "http://placekitten.com/g/200/200"],
        },
        {
            "title": "Improving Refund Rates",
            "dates": 2016,
            "description": "devising test templates, having refund scenarios",
            "images": ["http://placekitten.com/g/200/200", "http://placekitten.com/g/200/200"],
        },
    ],
    "display": function() {
        for (var project = 0; project < this.projects.length; project++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            var formattedDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            var formattedProjects = formattedTitle + formattedDates + formattedDescription;
            $(".project-entry:last").append(formattedProjects);

            this.projects[project].images.forEach(appendImage);

        }
    },
};

bio.display();
education.display();
work.display();
projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#main").append(internationalizeButton);

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);
