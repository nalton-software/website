const utils = {};

utils.htmlToElement = function(html) {
    return utils.htmlToElements(html)[0];
}

utils.htmlToElements = function(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return [...template.content.children];
}

utils.appendChildrenToNode = function(parent, children) {
    for (var child of children) {
        parent.appendChild(child);
    }
}