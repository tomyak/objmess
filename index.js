var regExpEscape=(literal_string)=>{
    return literal_string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}
var wrap = (s)=> "{" + s + "}"
var unwrap = (s)=> s.slice(1,s.length-1)

var replaceAll=(str,mapObjs,ignoreCase)=>{
    var rc = str
    mapObjs.forEach((mapObj)=>{
      var retext=Object.keys(mapObj).map((name)=>regExpEscape(wrap(name))).join("|")
      var re = new RegExp(retext,"g" + (ignoreCase ? "i" : ""));
      rc = rc.replace(re, function(matched){
          matched=unwrap(matched)
          if (ignoreCase){
            var key = Object.keys(mapObj).filter((k)=>k.toLowerCase()===matched.toLowerCase())[0]
            return mapObj[ key ];
          }
          return mapObj[ignoreCase ? matched.toLowerCase() : matched ];
      });
    })
    return rc
}

module.exports = {
  replaceAll:replaceAll
}
