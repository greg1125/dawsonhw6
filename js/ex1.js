const bodyNodes = () => {
    const allNodes = document.body.childNodes;
    allNodes.forEach(node => {
        console.log(node);
    });
};

bodyNodes();
