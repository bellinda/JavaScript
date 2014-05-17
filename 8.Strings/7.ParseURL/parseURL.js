function parseURL() {
    var input = "http://matadornetwork.com/abroad/piss-bulgarian/",
        parsedURL = { protocol: '', server: '', resource: '', toString: function() {return "protocol: " + parsedURL.protocol + ", server: " + parsedURL.server + ", resource: " + parsedURL.resource} },
        protocol = '',
        server = '',
        resource = '';

    for (var i = 0; i < input.length; i++) {
        if (protocol === '') {
            while (input[i] !== ':') {
                protocol += input[i];
                i++;
            }
            i += 2;
        } else if (server === '') {
            while (input[i] !== '/') {
                server += input[i];
                i++;
            }
            i--;
        } else if (resource === '') {
            while (i < input.length) {
                resource += input[i];
                i++;
            }
        }
    }

    parsedURL.protocol = protocol;
    parsedURL.server = server;
    parsedURL.resource = resource;

    return parsedURL.toString();
}

jsConsole.writeLine(parseURL());