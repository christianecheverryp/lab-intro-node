class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;

    this.items.sort((eachItem1, eachItem2) => {
      if(eachItem1 > eachItem2){
        return 1;
      }else {
        return -1;
      }
    })
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
