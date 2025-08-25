const facts = [
    "Cats sleep for 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats can rotate their ears 180 degrees.",
    "Ancient Egyptians worshipped cats as sacred animals."
];

function showFact() {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").innerText = fact;
}
