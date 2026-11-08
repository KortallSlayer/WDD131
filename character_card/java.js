const stats = {
    class: "Swamp Beast",
    level: 5,
    health: 100
}

let body
function displayStats() {
    const creatureStats =
        `<article class="stats">
            <p><strong>Class:</strong> ${stats.class}</p>
            <p><strong>Level:</strong> ${stats.level}</p>
            <p><strong>Health:</strong> ${stats.health}</p>
        </article>`;

    document.getElementById("stats").innerHTML = creatureStats;
}

displayStats();

document.querySelector("#damage").addEventListener("click", () => {
    stats.health -= 20;
    displayStats();
});
document.querySelector("#level").addEventListener("click", () => {
    stats.level++;
    displayStats();
});