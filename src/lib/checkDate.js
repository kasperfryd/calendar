export const checkDate = (_day) => {
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    console.log(month)
    if (month === 11){
        if (day >= _day){
            return true
        }
    }
    else return false
}