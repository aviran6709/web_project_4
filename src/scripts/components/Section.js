 export default class Section{
constructor({items , renderer} , containerSelector){
this._items = items;
this._renderer = renderer;
this._container = document.querySelector(containerSelector) ;
}

addItem = (element) => {
this._container.append(element);
}
renderItems() {
this._items.forEach(item => {  
//console.log(this._renderer(item));
this.addItem(this._renderer(item));
});
  }
}
