function Getusers() {
  fetch("https://randomuser.me/api/?results=3")
  .then((rwdata) => rwdata.json())
  .then((userdata) => {
    document.querySelector(".main").innerHTML = "";

    userdata.results.forEach((user) => {
      // Card container
      const card = document.createElement("div");
      card.className = "bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-xs";

      // Image
      const img = document.createElement("img");
      img.src = user.picture.large;
      img.alt = "User";
      img.className = "w-24 h-24 rounded-full mx-auto mb-4 object-cover";

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold text-center text-white";
      name.textContent = user.name.first + " " + user.name.last;

      // Role
      const role = document.createElement("p");
      role.className = "text-center text-gray-400 mt-2";
      role.textContent = user.email;

      // Bio
      const bio = document.createElement("p");
      bio.className = "text-center text-gray-500 text-sm mt-4";
      bio.textContent = user.location.city + ", " + user.location.country;

      // Button container
      const buttonWrapper = document.createElement("div");
      buttonWrapper.className = "flex gap-4 mt-6";

      // Follow button
      const followBtn = document.createElement("button");
      followBtn.className =
        "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded";
      followBtn.textContent = "Follow";

      // Message button
      const messageBtn = document.createElement("button");
      messageBtn.className =
        "flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-2 rounded";
      messageBtn.textContent = "Message";

      // Append buttons
      buttonWrapper.appendChild(followBtn);
      buttonWrapper.appendChild(messageBtn);

      // Assemble card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);
      card.appendChild(buttonWrapper);

      // Add to DOM
      document.querySelector(".main").appendChild(card);
    });
  });
}
let refreshButton = document.querySelector("#Refresh");
refreshButton.addEventListener("click", () => {
  Getusers();
});