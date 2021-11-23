function add(distanceUsed, use) {
    return distanceUsed + use;
}
//2.3
const euCar1 = {
    id: 10001,
    brand: "Honda",
    color: "Green",
    distanceUsed: 20,
    showCar: function () {
        return "Honda";
    },
    use: function () {
        return 10;
    }
};
console.log("Id : " + euCar1.id);
console.log("brand : " + euCar1.brand);
console.log("color : " + euCar1.color);
console.log("distanceUsed : " + euCar1.distanceUsed);
console.log("showCar : " + euCar1.showCar());
console.log("use : " + euCar1.use());
