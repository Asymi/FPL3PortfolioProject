//Function to set interval between dates
const setInterval = (frequency) => {
    if (frequency.toLowerCase() === 'daily'){
        return 1;
    } else if (frequency.toLowerCase() === 'weekly'){
        return 7;
    } else if (frequency.toLowerCase() === 'fortnightly'){
        return 14;
    } else if (frequency.toLowerCase() === 'monthly'){
        return 30;
    }
}

// Functiont o generate an array of dates
const dateArray = function(start, end, interval) {
    const datesArr = [];
    const varDate = new Date(start);
    const endDate = new Date(end);
    while (varDate <= endDate) {
        datesArr.push(new Date(varDate));
        varDate.setDate(varDate.getDate() + interval);
    }
    datesArr.map(date => date.toISOString().slice(0, 10));
    return datesArr
}

module.exports =  { setInterval, dateArray }