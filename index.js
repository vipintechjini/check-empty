function isEmpty(val) {
    let checkEmpty = false;
    if (val == null) checkEmpty = true;

    switch(typeof val) {
        case 'boolean' : checkEmpty = false;
        break;
        case 'number' : checkEmpty = (val === 0);
        break;
        case 'string' : checkEmpty = (val.length === 0);
        break;
        case 'function' : checkEmpty = (val.length === 0);
        break;
        default: {
            if (Array.isArray(val)) checkEmpty = (val.length === 0);
        }
    }
  return checkEmpty
}

module.exports = isEmpty