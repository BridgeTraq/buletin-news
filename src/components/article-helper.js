export function textShrink(text = "", wordCount = 8) {
    const textArray = text.split(" ");

    if (textArray.length <= wordCount) {
        return text;
    } else {
        return textArray.slice(0, wordCount).join(" ") + "...";
    }
}

export function dateFix(date) {
    const oldDate = new Date(date);
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - oldDate.getTime();

    const minute = Math.round(timeDifference / 60_000);
    const hour = Math.round(timeDifference / 3_600_000);
    const day = Math.round(timeDifference / 86_400_000);

    if (minute < 1) {
        return "Just now";
    } else if (minute <= 59) {
        return minute > 1 ? `${minute} minutes ago` : `${minute} minute ago`;
    } else if (hour <= 23) {
        return hour > 1 ? `${hour} hours ago` : `${hour} hour ago`;
    } else if (day <= 5) {
        return day > 1 ? `${day} days ago` : `${day} day ago`;
    } else {
        return oldDate.toDateString();
    }
}
