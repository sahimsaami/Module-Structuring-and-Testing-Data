function getCardValue(card) {
    const rank = card.slice(0, -1);  

    if (rank === "A") return 11;
    if (["J", "Q", "K", "10"].includes(rank)) return 10;
  
    const num = parseInt(rank);
    if (num >= 2 && num <= 9) return num;

    throw new Error("Invalid card rank.");
    // if (rank === "A")
    return 11;
}
module.exports = getCardValue;