class school {
    getProperties() {
    }
    constructor(name) {
        this.schoolName = name;
    }
    getSchoolName() {
        return this.schoolName;
    }
}
class student extends school {
    constructor(name, fee, date) {
        super('ABC school');
        this.studentName = name;
        this.studentFees = fee;
        this.studentJoining = date;
    }
    getAllProperties() {
        console.log(this.studentName, this.studentFees, this.studentJoining);
    }
}
var nitin = new student('nitin', 6000, '12/10/18');
var amit = new student('amit', 10000, '01/10/18');
console.log(nitin.getSchoolName());
//# sourceMappingURL=mySecondFile.js.map