export default dataview => {
    const arrayBuffer = new ArrayBuffer(dataview.byteLength);
    new Uint8Array(arrayBuffer).set(
        new Uint8Array(
            dataview.buffer,
            dataview.byteOffset,
            dataview.byteLength
        )
    );

    const clonedDataView = new DataView(arrayBuffer);

    return clonedDataView;
};
