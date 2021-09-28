export default class BundleInfo {
    constructor(
        name = undefined,
        dependencies = []) {
        this.name = name;
        this.dependencies = dependencies;
    }
}
