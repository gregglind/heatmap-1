// These constants are required to handle file streams, but aren't
// available through the addons SDK
// Note that these have been converted from octal to base10 because
// JS is terrible.
const FS_CONST = {
    PR_RDONLY: 1,
    PR_WRONLY: 2,
    PR_RDWR: 4,
    PR_CREATE_FILE: 8,
    PR_APPEND: 16,
    PR_TRUNCATE: 32,
    PR_SYNC: 64,
    PR_EXCL: 128
};

const TAB_SESSION_COMPLETE = "tab-session-complete";
const DELETE_SERVER_DATA = "delete-server-data";
const DELETE_COMPLETED = "delete-server-data-completed";
const DELETE_FAILED = "delete-server-data-failed";
const UNINSTALL_ADDON = "uninstall-addon";
const CRYPTO_URL = "https://miracle.services.mozilla.com/v1/jwk"

const STUDY_END_DATE = new Date(2016, 10, 15);

exports.FS_CONST = FS_CONST;
exports.TAB_SESSION_COMPLETE = TAB_SESSION_COMPLETE;
exports.DELETE_SERVER_DATA = DELETE_SERVER_DATA;
exports.DELETE_COMPLETED = DELETE_COMPLETED;
exports.DELETE_FAILED = DELETE_FAILED;
exports.DELETE_SERVER_DATA = DELETE_SERVER_DATA;
exports.UNINSTALL_ADDON = UNINSTALL_ADDON;
exports.CRYPTO_URL = CRYPTO_URL;
exports.STUDY_END_DATE = STUDY_END_DATE;