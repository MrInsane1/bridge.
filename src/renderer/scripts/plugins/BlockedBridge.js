import Runtime from "./Runtime";

export default class BlockedBridge {
    constructor(is_module, file_path) {
        this.plugin_id = Runtime.Plugins.getRuntimeId();
        this.__file_path__ = file_path;
        if(is_module) {
            Runtime.Plugins.add(this.plugin_id, "module");
        } else {
            Runtime.Plugins.add(this.plugin_id, "unknown");
        }

        this.Store = {
            namespace: undefined,
            setup() {},
            load() { },
            save() {},
            exists() {}
        };
        this.FS = {
            readFile() {},
            readDirectory() {},
            exists() {},
            stats() {}
       };
        this.Highlighter = {
            registerLanguage() {},
            unregisterLanguage() {},
            addKeywords() {},
            addTitles() {},
            addSymbols() { }
        };

        this.Menu = {
            register() {}
        };

        this.Sidebar = {
            register() {},
            update() {},
            remove() {},
            open() {},
            openDefault() {},
            close() {}
        };
        this.Footer = {
            register() {},
            update() {},
            remove() {}
        };
        this.Window = {
            register() {},
            update() {},
            remove() {},
            open() {},
            close() {}
        };
    }

    registerPlugin(plugin_info) {
        Runtime.Plugins.add(this.plugin_id, { ...plugin_info, id: this.__file_path__ });
    }
    on() {}
    trigger() {}
    open() {}
    openExternal() {}
}