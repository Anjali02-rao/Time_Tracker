const activities = [
  {
    title: "Work",
    daily: { current: 5, previous: 7 },
    weekly: { current: 32, previous: 36 },
    monthly: { current: 103, previous: 128 },
  },
  {
    title: "Play",
    daily: { current: 1, previous: 2 },
    weekly: { current: 10, previous: 8 },
    monthly: { current: 23, previous: 29 },
  },
  {
    title: "Study",
    daily: { current: 0, previous: 1 },
    weekly: { current: 4, previous: 7 },
    monthly: { current: 13, previous: 19 },
  },
  {
    title: "Exercise",
    daily: { current: 1, previous: 1 },
    weekly: { current: 4, previous: 5 },
    monthly: { current: 11, previous: 18 },
  },
  {
    title: "Social",
    daily: { current: 1, previous: 3 },
    weekly: { current: 5, previous: 10 },
    monthly: { current: 21, previous: 23 },
  },
  {
    title: "Self Care",
    daily: { current: 0, previous: 1 },
    weekly: { current: 2, previous: 2 },
    monthly: { current: 7, previous: 11 },
  },
];

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

document.querySelector(".user-tracker").addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    const period = e.target.textContent.toLowerCase();
    updateTime(period);

    document
      .querySelectorAll(".user-tracker p")
      .forEach((p) => p.classList.remove("active"));
    e.target.classList.add("active");
  }
});

updateTime("weekly");

function updateTime(period) {
  activities.forEach((e) => {
    document.querySelector(
      `.${e.title.toLowerCase().replace(/\s+/g, "-")} .display h3`
    ).textContent = e[period].current + "hrs";
    if (period === "daily")
      document.querySelector(
        `.${e.title.toLowerCase().replace(/\s+/g, "-")} .display p`
      ).textContent = "Yesterday - " + e[period].previous + "hrs";
    else if (period === "weekly")
      document.querySelector(
        `.${e.title.toLowerCase().replace(/\s+/g, "-")} .display p`
      ).textContent = "Last Week - " + e[period].previous + "hrs";
    else if (period === "monthly")
      document.querySelector(
        `.${e.title.toLowerCase().replace(/\s+/g, "-")} .display p`
      ).textContent = "Last Month - " + e[period].previous + "hrs";
  });
}
