const jsonResponse = (res, status, data) =>{
    return res.status(status)
    .contentType('application/json')
    .send(data);
}

module.exports = {
    jsonResponse
}