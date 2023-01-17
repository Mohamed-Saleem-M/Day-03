// Question 2 : Create your own resume data in JSON format

var myResume = {

    "basics": {

        "name": "Mohamed Saleem M",
        "email" : "mohamedsaleem.mep@gmail.com",
        "dateOfBirth": "28/12/1996",
        "contact": "8072275334",
        "address": "Tirunelveli-TamilNadu",
        "qualification" : "B.E. Mechanical Engineering",
        "languages" : "Tamil and English"

    },

    "education" : {

        "degree" : "B.E. Mechanical Engineering",
        "nameOfInstitution" : "Francis Xavier Engineering College",
        "studyType" : "Full time",
        "batchStartYear" : "2014",
        "batchEndYear" : "2018",
        "CGPA" : "6.8"

    },

    "workExperience" : {

        "company" : "Powerconz MEP Systems private limited",
        "position" : "MEP Design Engineer",
        "startDate" : "13/12/2018",
        "endDate" : "05/03/2022",
        "jobDescription" : "MEP Design Engineer who is responsible for preparing MEP System Design according to various site conditions and co-operating with site teams and client till completion of project"

    },

    "skills" : {

        "ProgrammingLanguages" : "C++, Python, JavaScript",
        "database" : "MySQL, MSExcel",
        "level" : "Beginner",
        
    },

    "personalQualities" : 
        [
            "Goal Driven and Effective Team Player",
            "Strong Analytical and Logical Skills",
            "Communication and Readiness to learn and grow"
        ]
    

}

console.log(myResume);


