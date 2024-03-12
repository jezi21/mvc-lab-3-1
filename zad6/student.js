const FULL_NAME = 'Marcel Wiewióra';
const STUDENT_ID = 46773;


const sudents_data = {
    0: {
        FULL_NAME: 'Marcel Wiewióra',
        STUDENT_ID: 46773
    },
    1: {
        FULL_NAME: 'Kacper Nowak',
        STUDENT_ID: 111222
    },
    2: {
        FULL_NAME: 'Maja Kowalskai',
        STUDENT_ID: 222333
    }
}

const michal = {
    FULL_NAME: 'Wisniewski',
    STUDENT_ID: 333444
}


function getStudentFullName(id) {
    const student= sudents_data[id];
    if (student){
        return student.FULL_NAME;
    }else{
        return michal.FULL_NAME;
    }
}

function getStudentId(id) {
    const student= sudents_data[id];
    if (student){
        return student.STUDENT_ID;
    }else{
        return michal.STUDENT_ID;
    }
}

module.exports = {
    getStudentFullName,
    getStudentId
}

