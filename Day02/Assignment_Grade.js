function Grade(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score < 60):
            grade = 'Fail';
            break;
        default:
            grade = 'Invalid score';
    }

    return grade;
}

let studentScore = 35; 
console.log(Grade(studentScore)); 
