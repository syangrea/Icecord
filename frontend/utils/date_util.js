export const monthArr = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
export const dayArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
export const yearArr = [];
for (let i = 2019; i > 1869; i--) {
    yearArr.push(i);
}


export const timeDisplay = date => {
    let d = new Date(date);
    let today = new Date();
    if(today - (24 * 60 * 60 * 1000 * 2) < d){
        let t = d.toLocaleTimeString();
        if (today - (24 * 60 * 60 * 1000) < d) {
            return `Today at ${t.split(" ")[0].split(":").slice(0, 2).join(":") + " " + t.split(" ")[1] }`;
        }else{
            return `Yesterday at ${t.split(" ")[0].split(":").slice(0, 2).join(":") + " " + t.split(" ")[1] }`;
        }
    }else{
        return d.toLocaleDateString();
    }
}