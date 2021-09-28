export default class GraphNode {
    constructor(id, dependencies = []) {
        this.id = id;
        this.name = id !== undefined
            ? id
            : undefined;
        this.dependencies = dependencies;
        this._color = undefined;
        this._size = undefined;
    }
}
