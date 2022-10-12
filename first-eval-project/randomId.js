export function generateRandomId() {
    const resouse =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    const length = 12;
    let id = "";

    for (let i = 0; i <= length; i++) {
    const index = Math.floor(Math.random() * resouse.length);
    id += resouse[index];
    }

    return id;
}