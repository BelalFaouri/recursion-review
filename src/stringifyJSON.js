// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
	if(typeof obj === 'number'){
		return ''+obj;
	}
	else if (obj === null){
		return 'null';
	} else if (typeof obj === 'boolean'){
		return ''+obj
	}
	else if(Array.isArray(obj)){
		if(obj.length > 1){
			var newStr='[';
			for(var i = 0 ; i<obj.length;i++){
				if(typeof obj[i] === 'string'){
					newStr+='"'+obj[i]+'"'+','
				}else{
					newStr+=obj[i]+',';
				}
			}
			return newStr.slice(0,-1)+']';
		}
		if(obj.length === 0){
			return '[]';
		}
		else if(typeof obj[0] === 'string'){
		return '['+'"'	+obj +'"'+ ']';
		}
		else{
			return '['+	obj+ ']';

		}

	}
	else if(typeof obj === 'string'){
		return '"'+obj+'"';
	}




	return obj;

}
