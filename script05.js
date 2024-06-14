const guests = ["Anurag", "Mithun", "Alka", "Shivam", "Farman"];

function formatGuestList(guestList) {
    return guestList.join(", ");
}

// Example usage
const guestSentence = formatGuestList(guests);
console.log(guestSentence); // Output: Anurag, Mithun, Alka, Shivam, Farman
