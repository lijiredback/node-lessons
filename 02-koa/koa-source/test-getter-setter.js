const obj = {
    info: {
        name: 'Lee'
    },

    get name() {
        return this.info.name;
    },

    set name(val) {
        return this.info.name = val;
    }
};

console.log(obj.name);
console.log(obj.name = 'Jerry');