// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
showDetails("Osama", 38, true);

function showDetails(arg1, arg2, arg3) {
    let name = getName(arg1, arg2, arg3);
    let age = 0;
    let status = "Are";




    console.log(`Hello ${name}, Your Age Is ${age}, You ${status} Available For Hire`)
}
// "Osama", 38, true
// 38, "Osama", true
// true, 38, "Osama"
function getName(arg1, arg2, arg3) {
    let name = "";
    

    name = typeof arg1 === "string" ? arg1 : "";
    if (name !== "") {
        return name;
    }

    name = typeof arg2 === "string" ? arg2 : "";
    if (name !== "") {
        return name
    }

    name = typeof arg3 === "string" ? arg3 : "";

    return name
}

function getAge() {

}
