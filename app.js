console.log("Name: " + "josh hurn".toUpperCase());
console.log("Career: Full Stack Engineer / Instructor");
console.log("Description: I like turtles");
console.log("\n");
console.log("My Interests:");
console.log("* Music");
console.log("* Games");
console.log("* TV");
console.log("\n");
console.log("My Previous Experience:");
displayPosition("Uber", "Software Engineer", "Maintained inventory systems for drivers");
displayPosition("Innovate Birmingham", "Janitor", "Cleaned, swept, slept");
console.log("\n");
console.log("My Skills: ");
displaySkill("Coding", true);
displaySkill("Tuba", false);

function displayPosition(companyName, title, description) {
    console.log("* " + title + " at " + companyName + " - " + description);
}

function displaySkill(skillName, isSkillCool) {
    if(isSkillCool) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}