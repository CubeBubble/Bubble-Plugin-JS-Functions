function(properties, context) {

    var string = properties.input;
    
	string = string.replace(/^\s+|\s+$/g, '');
    string = string.toLowerCase();
  
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    string = string.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    return {output : string}

}