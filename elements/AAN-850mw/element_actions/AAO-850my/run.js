function(instance, properties, context) {

    const input = JSON.parse(properties.input);
    
    var result = [];
    
    properties.keys.forEach(item => result.push(input[item.value]))
    
    instance.publishState("parsedjson", result);

}