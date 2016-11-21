// Create four JavaScript objects as required
var bio = {
    "name": "Bro Dee",
    "role": "Web Developer",
    "welcomeMessage": "This page is dynamically built with JavaScript and JSON data format.",
    "contacts": {
        "mobile": "11111111",
        "email": "bdbdbd@gmail.com",
        "github": "brodee",
        "twitter": "brodee",
        "location": "canberra"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Python"],
    "bioPic": "images/fry.jpg"
};

var work = {
    "jobs": [{
            "employer": "Edward",
            "title": "delivery boy",
            "location": "Cambodia",
            "dates": "Jan 2013 - Mar 2013",
            "description": "cool job cool job cool job cool jobc ool job cool job cool job cool job"
        },

        {
            "employer": "Chris",
            "title": "assistant",
            "location": "Singapore",
            "dates": "Jun 2014 - Aug 2014",
            "description": "pretty intense pretty intense pretty intense pretty intense pretty intense pretty intense"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Portfolio",
            "dates": "Dec 2015",
            "description": "This web page is my portfolio page and it was the first project for Udacity Front-end Nanodegree." +
                "This web page is my portfolio page and it was the first project for Udacity Front-end Nanodegree." +
                "This web page is my portfolio page and it was the first project for Udacity Front-end Nanodegree.",
            "images": ["images/fry.jpg"]
        },

        {
            "title": "Resume",
            "dates": "Dec 2015",
            "description": "This is my resume. This is my resume. This is my resume. This is my resume." +
                "This is my resume. This is my resume. This is my resume. This is my resume." +
                "This is my resume. This is my resume. This is my resume. This is my resume." +
                "This is my resume. This is my resume. This is my resume. This is my resume.",
            "images": ["images/fry.jpg"]
        }
    ]
};


var education = {
    "schools": [{
            "name": "ANU",
            "location": "Canberra",
            "degree": "Bachelor of Engineering",
            "majors": ["Electronics"],
            "dates": "2015",
            "url": "http://www.anu.edu.au"
        },

        {
            "name": "SMU",
            "location": "Singapore",
            "degree": "Bachelor of Business",
            "majors": ["Business"],
            "dates": "2013",
            "url": "http://www.google.com"
        }
    ],

    "onlineCourses": [{
        "title": "Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com/course/ud804"
    }]
};

// Update the HTML variables in helper.js (i.e. swapping out placeholder text) 
//with property value in the JavaScript objects above

function updateHTML() {
    //Header section
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    //Footer section
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation);

    //Skills in the header section 
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
}
updateHTML();


work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedworkLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

projects.display = function() {
    projects.projects.forEach(function(item) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", item.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
        $(".project-entry:last").append(formattedDescription);

        if (item.images.length > 0) {
            item.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();


education.display = function() {
    //schools 
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    //online courses
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnline = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry:last").append(formattedOnline);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineURL);
    });
};
education.display();

$("#mapDiv").append(googleMap);