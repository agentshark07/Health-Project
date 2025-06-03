const messages = [
  "Welcome to SFCS (Stress Free College Search)!",
  "I designed this site to help students like myself who want to make a plan and get into their dream college, but didn't know where to start.",
  "To help you get started I just have a couple questions."
];

let step = 0;

function nextMessage() {
  step++;
  const bubble = document.getElementById("bubble");
  const text = document.getElementById("bubble-text");

  if (step < messages.length) {
    text.innerText = messages[step];
  } else {
    bubble.classList.add("hidden");
    document.getElementById("form-container").classList.remove("hidden");
  }
}

function generateRoadmap() {
  const grade = document.getElementById("grade").value;
  const months = document.getElementById("months").value;
  const gpa = document.getElementById("gpa").value;
  const sat = document.getElementById("sat").value;

  // For now, mock data
  const roadmap = {
    reachSchools: ["Harvard University", "MIT", "Stanford University"],
    matchSchools: ["University of Florida", "UC Santa Barbara"],
    safetySchool: ["Florida Atlantic University"],
    resources: ["FAFSA", "Local Scholarship Search", "CollegeBoard Search Tools"]
  };

  const output = `
    <h2>Your Personalized College Roadmap</h2>
    <h3>Reach Schools</h3>
    <ul>${roadmap.reachSchools.map(s => `<li>${s}</li>`).join('')}</ul>
    <h3>Match Schools</h3>
    <ul>${roadmap.matchSchools.map(s => `<li>${s}</li>`).join('')}</ul>
    <h3>Safety School</h3>
    <ul>${roadmap.safetySchool.map(s => `<li>${s}</li>`).join('')}</ul>
    <h3>Helpful Resources</h3>
    <ul>${roadmap.resources.map(r => `<li>${r}</li>`).join('')}</ul>
  `;

  const roadmapDiv = document.getElementById("roadmap");
  roadmapDiv.innerHTML = output;
  roadmapDiv.classList.remove("hidden");
}
