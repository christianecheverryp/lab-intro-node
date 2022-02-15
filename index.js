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

  get(pos) {
    if(this.items[pos] === undefined ){
      throw new Error('OutOfBounds');
    }else {
      return this.items[pos]
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else {
      
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else {
      
      return Math.min(...this.items);
    }
  }

  sum() {
    let result = 0;
    for(let i = 0; i < this.items; i++){
      
      result = result + this.items[i]
      
      
    }
    return result;
  }

  avg() {}
}

module.exports = SortedList;
