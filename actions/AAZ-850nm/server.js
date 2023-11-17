function(properties, context) {

    var string = properties.input;
    
	string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    return {output : string}

}