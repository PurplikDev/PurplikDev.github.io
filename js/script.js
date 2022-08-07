const profile_picture = document.getElementById("profile-picture");

console.log("deez");

profile_picture.src = "images/purplik.png";

profile_picture.addEventListener('mouseover', () => {
      profile_picture.src = "images/purplik.gif";
});

profile_picture.addEventListener('mouseout', () => {
      profile_picture.src = "images/purplik.png";
});