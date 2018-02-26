/**
 * Export method exports error.
 */
module.exports = {
    show_error : (message_err) => {
        var err = new Error(message_err);
        err.status = 404;
        return err;
    }
}