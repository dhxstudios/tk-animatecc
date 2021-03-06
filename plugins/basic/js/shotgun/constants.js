// Copyright (c) 2016 Shotgun Software Inc.
//
// CONFIDENTIAL AND PROPRIETARY
//
// This work is provided "AS IS" and subject to the Shotgun Pipeline Toolkit
// Source Code License included in this distribution package. See LICENSE.
// By accessing, using, copying or modifying this work you indicate your
// agreement to the Shotgun Pipeline Toolkit Source Code License. All rights
// not expressly granted therein are reserved by Shotgun Software Inc.

"use strict";

var sg_constants = sg_constants || {};

// information identifying each of the sg extensions running
sg_constants.extension_info = {

    manager: {
        id: "com.sg.basic.an.manager"
    },

    panel: {
        id: "com.sg.basic.an.panel"
    }
};

// debug console urls. the ports should correspond to the ports defined in
// the extension's .debug file for the supported CC applications.
sg_constants.product_info = {

    // ---- key'd on app id which is what we have access to in the extensions

    // tk_engine_name: translates the app id (like "FLPR") to the expected
    // engine block name (like "tk-animatecc") in a tk configuration.

    // Animate
    FLPR: {
        display_name: "Animate",
        tk_engine_name: "tk-animatecc",
        debug_url: "http://localhost:34900"
    }

    // NOTE: the debug ports are defined in .debug file at the top level of the
    // plugin.
};

// This is simply a lookup of panel div ids. The keys of this should never
// change. The values should always match the div ids in panel.html.
sg_constants.panel_div_ids = {
    error: "sg_status_error",
    warning: "sg_status_warning",
    header: "sg_panel_header",
    contents: "sg_panel_contents",
    command_help: "sg_panel_command_help",
    footer: "sg_panel_footer",
    progress: "sg_progress",
    progress_bar: "sg_progress_bar",
    info: "sg_status_info",
    console: "sg_panel_console",
    console_log: "sg_panel_console_log"
};

// Error codes to identify why the python process was shut down
sg_constants.python_error_codes = {
    EXIT_STATUS_CLEAN: 0,
    EXIT_STATUS_ERROR: 100,
    EXIT_STATUS_NO_PYSIDE: 101,
    EXIT_STATUS_PYTHON_FAIL: 102
};

// External link to pyside docs
sg_constants.pyside_url = "https://wiki.qt.io/PySide";