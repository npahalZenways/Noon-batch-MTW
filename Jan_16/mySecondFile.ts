interface interfaace_name{
	//properties and methods
	classCount;
	studentStrength;
	getProperties();
}

class school implements interfaace_name{
	classCount;
	studentStrength;
	getProperties(){
		
	}
	private schoolName;
	constructor(name) {
		this.schoolName = name;
	}
	getSchoolName(){
		return this.schoolName;
	}
}

class student extends school{
	studentName;
	studentFees;
	studentJoining;
	constructor(name, fee, date){
		super('ABC school')
		this.studentName = name;
		this.studentFees = fee;
		this.studentJoining = date;
	}

	getAllProperties(){
		console.log(this.studentName, this.studentFees, this.studentJoining);
	}
}
// var mySchool = new school();
var nitin = new student('nitin', 6000, '12/10/18');
var amit = new student('amit', 10000, '01/10/18');

// console.log(nitin, amit);
// console.log(nitin.student_fees);
console.log(nitin.getSchoolName());


