const factories = {
    repetitionsFactory(num) {
        return `<option value="${num}">${num} times</option>`
    },
    getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }, 
    coinToss() {
        const coin = this.getRandom(2)
        if(coin === 1) {
            return true
        }
        return false
    }
}

export default factories