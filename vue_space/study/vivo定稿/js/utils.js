Number.prototype.toPrice = function(b=2){
  return '￥'+this.toFixed(b).replace(/(\d{1,3})(?=(\d{3})+(?:[$|.]))/g, '$1,');
}