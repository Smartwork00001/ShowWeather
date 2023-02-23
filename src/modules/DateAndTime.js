const getDate = () => {
    const date = new Date();
    const month = date.toLocaleString('en-US', {month: 'short'});
    return `${date.getDate()}, ${month} ${date.getFullYear()}`;
}

const getTime =  () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export {getTime, getDate};