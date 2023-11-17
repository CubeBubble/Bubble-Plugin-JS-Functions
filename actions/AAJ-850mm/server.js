function(properties, context) {
    
	var today = new Date();
    var birthDate = new Date(properties.birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; }
    return {age: age};

}