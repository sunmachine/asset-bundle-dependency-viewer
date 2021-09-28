export default class Filter {
    constructor(patterns, enabled) {
        this.patterns = patterns;
        this.enabled = enabled;
    }

    isFiltered(targetBundleId) {
        if (this.enabled) {
            for (const i in this.patterns) {
                const pattern = this.patterns[i];
                let regex = new RegExp(pattern);
                if (regex.test(targetBundleId)) {
                    return true;
                }
            }
        }

        return false;
    }
}
