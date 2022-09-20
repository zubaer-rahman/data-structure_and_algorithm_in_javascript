class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    add (key, value) {
        this.dictionary[key] = value;
    }
    get (key) {
        return this.dictionary[key];
    }
}
const phoneBook = new Dictionary;

phoneBook.add("Chayan bra", "01770288765");
phoneBook.add("Sufian Bra", "01688825662");
phoneBook.add("Nayon Bra", "01370288679");

console.log(phoneBook.dictionary);

const sufi = phoneBook.get("Sufian Bra");

console.log(sufi);