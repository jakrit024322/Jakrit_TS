let employees;
employees = [
    [1001, "jakrit", 1, 20000, 0, ""],
    [1002, "Thanakit", 2, 30000, 0, ""],
    [1003, "k2ngpop", 3, 40000, 0, ""],
    [1004, "wasok", 4, 50000, 0, ""],
    [1005, "taned", 6, 60000, 0, ""]
];
employees.forEach((s) => {
    s[4] = s[2] * s[3];
    console.log(`ID : ${s[0]} Name : ${s[1]} WorkYear : ${s[2]} Salary : ${s[3]}`);
});
employees.forEach((b) => {
    if (b[2] < 3) {
        b[5] = "Rice Cooker";
    }
    else if (b[3] > 4) {
        b[5] = "Microwave Oven";
    }
    console.log(`Bonus : ${b[4]} Gift : ${b[5]}`);
});
