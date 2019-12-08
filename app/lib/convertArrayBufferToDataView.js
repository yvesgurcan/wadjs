export default arrayBuffer => {
    const dataview = new DataView(arrayBuffer);
    return dataview;
};
