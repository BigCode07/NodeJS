const {v4:uuidv4} = required('uuid');

const getUUID = () => {
    return uuidv4();
}

module.exports  ={
    getUUID,
}