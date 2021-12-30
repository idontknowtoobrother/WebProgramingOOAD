
/**
 * 
 *  If the Student ID is not only digits type it's gonna return false
 * 
 *  true = correct SID
 *  false = not correct SID
 * 
 */
function isCorrectStudentID(sid) {
    return /^\d+$/.test(sid)
}

/**
 * 
 *  Login method will check is SID is number type and then post to server database .
 * 
 */
function login(sid, password) {
    if (!isCorrectStudentID(sid)) return;
    
    
}

login('62160246', '1234574')
