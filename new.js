// 🕰 Live Clock
function updateClock() {
    const clock = document.getElementById("liveClock");
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Call immediately on load

// 📚 Generate Class Buttons (Class 1-12)
document.addEventListener('DOMContentLoaded', function () {
    const classGrid = document.getElementById("classGrid");

    for (let i = 1; i <= 12; i++) {
        const classItem = document.createElement("div");
        classItem.classList.add("class-item");
        classItem.textContent = `Class ${i}`;
        
        // जब क्लिक करें, तो classX.html पेज खुले
        classItem.onclick = function () {
            window.open(`class${i}.html`, "_blank");
        };

        classGrid.appendChild(classItem);
    }
});