function printProfile({ name, nationality = "none" } = { name: "anonymous" }) {
    console.log(name, nationality);
}
printProfile();
printProfile({ name: "happy" });
printProfile({ name: "happy", nationality: "korea" });
