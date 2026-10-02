// 

const students = [
    { fullName: "Klindgang", age: 20, className: "BFL-WEB2-BEG", nickname: "", matricNumber: "", score: 70, grade: "", attendance: {}, subject: {} },
    { fullName: "Bosan", age: 21, className: "BFL-WEB2-INT", nickname: "", matricNumber: "", score: 81, grade: "", attendance: {}, subject: {} },
    { fullName: "Kelvin", age: 19, className: "BFL-WEB2-INT", nickname: "", matricNumber: "", score: 82, grade: "", attendance: {}, subject: {} },
    { fullName: "Vincent", age: 22, className: "BFL-WEB2-ADV", nickname: "", matricNumber: "", score: 42, grade: "", attendance: {}, subject: {} },
    { fullName: "IsntShe", age: 20, className: "BFL-WEB2-ADV", nickname: "", matricNumber: "", score: 21, grade: "", attendance: {}, subject: {} },
    { fullName: "MakP", age: 23, className: "BFL-WEB2-BEG", nickname: "", matricNumber: "", score: 31, grade: "", attendance: {}, subject: {} },
    { fullName: "Max", age: 19, className: "BFL-WEB2-INT", nickname: "", matricNumber: "", score: 12, grade: "", attendance: {}, subject: {} },
    { fullName: "BigJosh", age: 24, className: "BFL-WEB2-ADV", nickname: "", matricNumber: "", score: 9, grade: "", attendance: {}, subject: {} },
    { fullName: "Cheta", age: 21, className: "BFL-WEB2-INT", nickname: "", matricNumber: "", score: 12, grade: "", attendance: {}, subject: {} },
    { fullName: "John", age: 22, className: "BFL-WEB2-BEG", nickname: "", matricNumber: "", score: 32, grade: "", attendance: {}, subject: {} }
];



// iterating functions for scores
function itterate(students) {
    let passed = [];
    let failed = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 75) {
            passed.push(students[i])
        } else if (students[i].score <= 40) {
            failed.push(students[i])
        }
    }
    console.log("Passed:", passed)
    console.log("Failed:", failed)
}

// grading function to grade students score
function grade(students) {
    for (let i = 0; i < students.length; i++) {
        let score = students[i].score;
        switch (true) {
            case score >= 0 && score <= 20:
                students[i].grade = "F"
                break;
            case score >= 21 && score <= 30:
                students[i].grade = "E"
                break;
            case score >= 31 && score <= 49:
                students[i].grade = "D"
                break;
            case score >= 50 && score <= 65:
                students[i].grade = "C"
                break;
            case score >= 66 && score <= 80:
                students[i].grade = "B"
                break;
            case score >= 81 && score <= 100:
                students[i].grade = "A"
                break;
            default:
                "Invalid Score"
                break;
        }
    }
    return students;
}


// fullname function to ensure that all fullname is above 5 letters and above 2 sentence
function fullname(students) {
    let verifiedname = [];
    let unverifiedname = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].fullName.length >= 5) {
            verifiedname.push(students[i])
        } else {
            unverifiedname.push(students[i])
        }
    }
    console.log("VerifiedNames: ", verifiedname)
    console.log("UnVerifiedNames: ", unverifiedname)

    function getRandomNames(numbers) {
        let result = ""
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < numbers; i++) {
            result += alphabets[Math.floor(Math.random() * alphabets.length)]
        }

        return result
    }

    for (let i = 0; i < students.length; i++) {
        students[i].fullName += " " + getRandomNames(5);
        students[i].fullName += " " + getRandomNames(5);
    }

    return students
}

// nickname functions to ensure that all user's has a generated nickname
function nickname(students) {
    for (let i = 0; i < students.length; i++) {
        let nick = "";
        let scorenow = students[i].score
        result = students[i].fullName.split(" ")
        for (let j = 0; j < result.length; j++) {
            nick += result[j][0]
        }
        nick += scorenow;
        students[i].nickname = nick;
    }

    return students
}

// subject function to ensure all students has his/her subjects
function subject(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].className === "BFL-WEB2-BEG") {
            students[i].subject = `Maths: ${Math.floor(Math.random() * (100 - 45 + 1)) + 45}, English:${Math.floor(Math.random() * (100 - 45 + 1)) + 45}, Javascript: ${Math.floor(Math.random() * (100 - 45 + 1)) + 45}`

            //  console.log(students[i].subject)
            //  students[i].subject.push(students[i].subject)


        }


        else if (students[i].className === "BFL-WEB2-INT") {
            students[i].subject = `Maths: ${Math.floor(Math.random() * (100 - 45 + 1)) + 45}, English:${Math.floor(Math.random() * (100 - 45 + 1)) + 45}, React: ${Math.floor(Math.random() * (100 - 45 + 1)) + 45}`
            //  console.log(students[i].subject)


        }

        else if (students[i].className === "BFL-WEB2-ADV") {
            students[i].subject = `Maths: ${Math.floor(Math.random() * (100 - 45 + 1)) + 45}, English:${Math.floor(Math.random() * (100 - 45 + 1)) + 45}, NodeJS: ${Math.floor(Math.random() * (100 - 45 + 1)) + 45}`
            //  console.log(students[i].subject)

        }

        // console.log(students[i].subject)
        // console.log(students[i].subject)
        // console.log(students[i].subject)
    }

    return students


}

function matNum(students) {

    for (let i = 0; i < students.length; i++) {
        if (students[i].className === "BFL-WEB2-BEG") {
            students[i].matricNumber = `2026/BFL/BEG/00${Math.floor(Math.random() * (3 - 1 + 1)) + 1}`

        }

        else if (students[i].className === "BFL-WEB2-INT") {
            students[i].matricNumber = `2026/BFL/INT/00${Math.floor(Math.random() * (4 - 1 + 1)) + 1}`

        }

        else if (students[i].className === "BFL-WEB2-ADV") {
            students[i].matricNumber = `2026/BFL/ADV/00${Math.floor(Math.random() * (3 - 1 + 1)) + 1}`

        }

    }

    return students

}


// Attendance




function attendance(students) {

     let present = [true, false];
     let attendance = 0;

     for (let i = 0; i < students.length; i++) {

          students[i].attendance = { mon: present[Math.floor(Math.random() * present.length)], tue: present[Math.floor(Math.random() * present.length)], wed: present[Math.floor(Math.random() * present.length)], thur: present[Math.floor(Math.random() * present.length)], friday: present[Math.floor(Math.random() * present.length)], }


          days = Object.keys(students[i].attendance)
        //   console.log(days)
          for (let j = 0; j < days.length; j++) {

               if (students[i].attendance[days[j]] === true) {
                    attendance += 1
               } else {
                    attendance += 0
               }

          }

          console.log(attendance)

          if (attendance === 5) {
               students[i].score += 10

          } else if (attendance >= 3) {

               students[i].score += 5
          } else {

               students[i].score += 0
          }
     }

     return students
}




itterate(students)
console.log("Grading:", grade(students))
// console.log("ClassName:", classes(students))
console.log("SurnName: ", fullname(students))
// console.log(students)=
console.log("NickName: ", nickname(students))
subject(students)
matNum(students)
attendance(students)
// console.log(att)
console.log(students)
