function daysDifference() {
    nextEvent = new Date("2025-03-08");
    nextEvent.setHours(nextEvent.getHours() + 5);
    
    currDate = new Date();
    
    timeDiff = Math.abs(nextEvent.getTime() - currDate.getTime());

    dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    hourDiff = Math.floor(timeDiff / (1000 * 3600) - dayDiff * 24);
    minuteDiff = Math.floor(timeDiff / (1000 * 60) - (dayDiff * 24 * 60) - (hourDiff * 60));
    secondDiff = Math.floor(timeDiff / 1000 - (dayDiff * 24 * 3600) - (hourDiff * 3600) - (minuteDiff * 60));

    document.getElementById("next-event").innerHTML = dayDiff + ":" + (hourDiff < 10 ? "0" + hourDiff : hourDiff) + ":" + (minuteDiff < 10 ? "0" + minuteDiff : minuteDiff) + ":" + (secondDiff < 10 ? "0" + secondDiff : secondDiff);
}

setInterval(daysDifference, 1000);